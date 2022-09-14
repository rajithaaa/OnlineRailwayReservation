package com.example.Railway.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Traindb")
public class Train {

	@Id
	public int trainid;
	public String train_name;
	public String from;
	public String to;
	public int fare;
	public int berths;
	
	
	public Train(int trainid, String train_name, String from, String to, int fare, int berths) {
		super();
		this.trainid = trainid;
		this.train_name = train_name;
		this.from = from;
		this.to = to;
		this.fare = fare;
		this.berths = berths;
	}
	public Train() {
	
	}
	
	
	public int getTrainid() {
		return trainid;
	}
	public void setTrainid(int trainid) {
		this.trainid = trainid;
	}
	public String getTrain_name() {
		return train_name;
	}
	public void setTrain_name(String train_name) {
		this.train_name = train_name;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public int getFare() {
		return fare;
	}
	public void setFare(int fare) {
		this.fare = fare;
	}
	public int getBerths() {
		return berths;
	}
	public void setBerths(int berths) {
		this.berths = berths;
	}
	
	
	
	@Override
	public String toString() {
		return "Train [trainid=" + trainid + ", train_name=" + train_name + ", from=" + from + ", to=" + to + ", fare="
				+ fare + ", berths=" + berths + "]";
	}
	
	
	
	
}
