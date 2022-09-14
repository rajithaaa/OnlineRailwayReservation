package com.example.Railway.Controller;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Railway.Repository.UserRepository;
import com.example.Railway.Service.UserService;
import com.example.Railway.UserUtils.JwtUtils;
import com.example.Railway.model.UserModel;
import com.example.SecurityUser.model.AuthenticationRequest;
import com.example.SecurityUser.model.AuthenticationResponse;
@CrossOrigin("http://localhost:4200")
@RequestMapping("/Secure")
@RestController
public class AuthController {
	

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userservice;
	
	@Autowired
	AuthenticationManager authenticates;
	
	@Autowired
	JwtUtils jwtutil;
	
	@GetMapping("/dashboard")
	private String TestingToken() {
		return "Hello to All" +   SecurityContextHolder.getContext().getAuthentication().getName();
	}
	
	
	
	@PostMapping("/subs")
	private ResponseEntity<AuthenticationResponse>subscribeClient(@RequestBody UserModel authreq){
		
		UserModel usermodel =new UserModel();
		usermodel.setId(authreq.getId());
		usermodel.setUsername(authreq.getUsername());
		usermodel.setPassword(authreq.getPassword());
		
		
		try {
			userRepository.save(usermodel);
		}
		
		catch(Exception e){
			return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
					("Error during subscription ") , HttpStatus.OK);
		}
		
		return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse
				("Successful subs for client " +authreq.getUsername()), HttpStatus.OK);
	}
	
	
	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authreq) throws Exception{
		String username=authreq.getUsername();
		String password= authreq.getPassword();
		
		UserModel passengerobj = null;
		if(username != null && password != null ) {
		passengerobj = userservice.fetchUserByUsernameAndPassword(username,password);
		authenticates.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}
		if(passengerobj ==null) {
		throw new Exception("invalid credentials");
		}
		String jwt = jwtutil.generateToken(passengerobj);
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
		}
		
	

}
