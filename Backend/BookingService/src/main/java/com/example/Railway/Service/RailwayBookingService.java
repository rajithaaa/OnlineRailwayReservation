package com.example.Railway.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Railway.Repository.RailwayBookingRepository;
import com.example.Railway.exception.BookingOrderNotFoundException;
import com.example.Railway.model.RailwayBooking;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@Service
public class RailwayBookingService {
	@Autowired
	private RailwayBookingRepository bookingRepository;
	
	public RailwayBooking deleteOrder( String id)  throws BookingOrderNotFoundException{
		log.info(" inside the method of deleting  booking order...");
		Optional<RailwayBooking>opt=bookingRepository.findById(id);
			if(opt.isPresent()) {
			RailwayBooking book=opt.get();
		 bookingRepository.delete(book);
			return book;
			
			}
			else 
				throw new BookingOrderNotFoundException(" Ticket  does not exist  with this id");
		  
		}
	
	
}
