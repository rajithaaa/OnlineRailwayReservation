package com.example.Railway.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Railway.model.RailwayBooking;

public interface RailwayBookingRepository extends MongoRepository<RailwayBooking, String>{

	Optional<RailwayBooking> findById(String id);

	void deleteById(String id);

	
}
