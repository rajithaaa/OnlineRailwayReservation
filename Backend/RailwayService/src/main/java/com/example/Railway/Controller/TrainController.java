package com.example.Railway.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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

import com.example.Railway.Repository.TrainRepository;
import com.example.Railway.model.Train;

import lombok.extern.slf4j.Slf4j;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/Admin")
@Slf4j
public class TrainController {
	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private TrainRepository trainrepository;
	
	@Autowired
	MongoOperations mongoOperations;
	

	@GetMapping("/")
	public String welcome()
	{
		return(" Welcome !!");
	}
	
	@GetMapping("/Trains")
	public List<Train> getAllTrains() {
		log.info("getting the details of available trains...");
		return trainrepository.findAll();
	}
	
	@GetMapping("/Trains/{id}")
	public Optional<Train> getTrains(@PathVariable("id") int id) {
		log.info("getting  the detais of the available trains  based on id number...");
		return trainrepository.findById(id);
	}
	

	@PostMapping("/Trains")
	public ResponseEntity<String> add(@RequestBody Train train) {
		log.info("adding the new train details...");
		trainrepository.save(train);
		return null	;
	}
	
	@PutMapping("/Trains/{id}")
	public ResponseEntity<Train> updateTrain(@PathVariable("id") int id, @RequestBody Train train) {
		log.info("update  the detais of available trains  based on id number...");
	  trainrepository.save(train);
	  return null;
	}
	
	@DeleteMapping("/Trains/{id}")
	public String deleteTrain(@PathVariable("id") int id) {
		log.info("delete  the detais of all available trains  based on id number...");
	trainrepository.deleteById(id);   
	return "deleted";
  }
	
	
	
	
	
	
	
	
	

	
	
	@PostMapping("/regexfrom")
	  public List<Train> regexTrains(@RequestBody String fromm){
			

		  Query query = new Query();
		  query.addCriteria(Criteria.where("from").regex(fromm));
		  List<Train> trai = mongoOperations.find(query, Train.class);
		  return trai;
	  }
	  
	  
	  @PostMapping("/regexto")
	  public List<Train> regexTrain(@RequestBody String tooo){
		

		  Query query = new Query();
		  query.addCriteria(Criteria.where("to").regex(tooo));
		  List<Train> trai = mongoOperations.find(query, Train.class);
		  return trai;
	  }

	public ResponseEntity<Train> addTrain(Train train) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

		
	
}
