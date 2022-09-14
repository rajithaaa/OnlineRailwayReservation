package com.example.Railway.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.Railway.model.UserModel;
@Repository
public interface  UserRepository  extends MongoRepository<UserModel, Integer>{
		
	UserModel findByusername(String username);

	UserModel findByusername(String username, String password);


}
