package com.example.Railway;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;


@SpringBootApplication
public class RailwayServiceApplication  {

	public static void main(String[] args) {
		SpringApplication.run(RailwayServiceApplication.class, args);
	}
	@Bean
	@LoadBalanced
	public RestTemplate getRestTemplate()
	{
	return new RestTemplate();
	}


	

}
