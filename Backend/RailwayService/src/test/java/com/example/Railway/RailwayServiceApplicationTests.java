package com.example.Railway;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.Railway.Controller.TrainController;
import com.example.Railway.Repository.TrainRepository;
import com.example.Railway.model.Train;

@SpringBootTest
class RailwayServiceApplicationTests {

	@MockBean
	private TrainRepository trainrepository;

	@Autowired
	private TrainController Controller;



	@Test
	public void getAllTrainstest() {
		when(trainrepository.findAll()).thenReturn(
				Stream.of(new Train(1, "Juction-Express", "Mumbai", "Hydrabad", 600, 2)).collect(Collectors.toList()));
		assertEquals(1, Controller.getAllTrains().size());
	}

	@Test
	public void getTrainsbyIdTest() {
		int id = 4;
		Controller.getTrains(id);
		verify(trainrepository).findById(id);
	}

	
	
	
//	@Test()
//	public void deletebyIdTest() {
//		String train=Train(1, "Juction-Express", "Mumbai", "Hydrabad", 600, 2);
//		Controller.deleteTrain(train);
//		verify(trainrepository, times(1)).deleteById(train);
//		
//		
//	}

//	private String Train(int i, String string, String string2, String string3, int j, int k) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	
	
//	@Test
//	void addTraintest() {
//		Train train = new Train(1, "Juction-Express", "Mumbai", "Hydrabad", 600, 2);
//
//		when(trainrepository.addTrain(train)).thenReturn(train);
//		ResponseEntity<Train> res = Controller.addTrain(train);
//
//		assertEquals(HttpStatus.CREATED, res.getStatusCode());
//		assertEquals(train, res.getBody());
//	}
}
