package com.example.Railway.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.Railway.model.Train;

@Repository
public interface TrainRepository extends MongoRepository<Train, Integer>{

	List<Train> findAll();

	
	
	

	

}
