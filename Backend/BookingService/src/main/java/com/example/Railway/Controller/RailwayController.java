package com.example.Railway.Controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.Railway.Repository.RailwayBookingRepository;
import com.example.Railway.Service.RailwayBookingService;
import com.example.Railway.model.RailwayBooking;

import lombok.extern.slf4j.Slf4j;




@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/book")
@Slf4j
public class RailwayController {
	@Autowired
	private RestTemplate restTemplate;
	
	private RailwayBookingRepository bookingRepository;
	@Autowired
	private RailwayBookingService bookingService;
	
	
	@GetMapping("/")
	public String Check(){
		return("checked");
	}
	
	@PostMapping("/booking/add")
	public ResponseEntity <RailwayBooking> saveBook(@RequestBody RailwayBooking book) {
		log.info("add the ticket or book the ticket");
		  bookingRepository.save(book);
		  return null;
	    }
	
	
	@GetMapping("/bookings")
	public List<RailwayBooking> getAllbookings(){
    log.info("getting all the booked tickets");
		return bookingRepository.findAll();
	}
	
	@GetMapping("/bookings/{id}")
	public Optional<RailwayBooking> getBook(@PathVariable String id){
		log.info("get the details of the booked tickets based on id");
		return 	bookingRepository.findById(id);
	}

	@PutMapping("/bookings/update/{id}")
	public ResponseEntity<RailwayBooking>updateOrder(@PathVariable("id") String id,@RequestBody RailwayBooking book ) {
		log.info("updating  the detais of all booking order based on id number...");
		bookingRepository.save(book);
		return null;
	}
	
	
	
	
	
	@DeleteMapping("/bookings/delete/{id}")
	public RailwayBooking deleteOrder(@PathVariable("id")String id) {
		log.info("deleting  the detais of all booking order based on id number...");
		return bookingService.deleteOrder(id);
		
	}
	
	//@DeleteMapping("/bookings/delete/{id}")
	 //public String deleteOrder (@PathVariable String id) {
	  //bookingRepository.deleteById(id);
	//	return "Deleted SuccessFully !";
		}
	

