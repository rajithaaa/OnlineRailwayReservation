import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Seats {
  constructor(
    public  id: String,
    public  train: String,
    public  startStation: String,
    public  endStation: String,
    public  date: String,
    public  name:String,
  	public  age:String,
  	public  gender:String,
	  public  credit:String,
	  public  address:String,
	  public  berth:String,
	  public  bankname:String,
    public  email:String,
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class PnrService {
  constructor(private httpClient: HttpClient) { }

  getorders()
  {
    return this.httpClient.get<Seats[]>('http://localhost:8082/book/bookings') 
   }

  
}



