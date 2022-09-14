package com.example.Railway.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.Railway.Repository.UserRepository;
import com.example.Railway.model.UserModel;

@Service
public class UserService implements UserDetailsService  {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel foundedUser=userRepository.findByusername(username);
		if(foundedUser==null) {
		return null;
	}
	
		String user=foundedUser.getUsername();
		String pass=foundedUser.getPassword();
		return new User(user,pass , new ArrayList<>());
	
}

	
 public UserModel fetchUserByUsernameAndPassword(String username, String password) {
		// TODO Auto-generated method stub
		return userRepository.findByusername(username,password);
	}
}