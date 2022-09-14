package com.example.Railway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@EnableEurekaClient
@SpringBootApplication
public class ApigatwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApigatwayApplication.class, args);
	}

}
