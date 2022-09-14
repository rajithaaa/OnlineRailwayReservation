package com.example.Railway;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.client.RestTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;

@SpringBootApplication

public class RailwayBookingApplication  {

	public static void main(String[] args) {
		SpringApplication.run(RailwayBookingApplication.class, args);
	}
	@Bean
	@LoadBalanced
	public RestTemplate getRestTemplate()
	{
	return new RestTemplate();
	}

	

	
}
