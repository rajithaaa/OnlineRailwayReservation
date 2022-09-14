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
    public  name:String,
  	public  age:String,
  	public  gender:String,
	  public  credit:String,
	  public  address:String,
	  public  berth:String,
	  public  bankname:String,
    public  date:String,
    public  email:String
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private httpClient: HttpClient) { }

  getCurrentResto(id: string)
  {
    return this.httpClient.get(`${'http://localhost:8082/book/bookings'}/${id}`)
  }
  

  getorders()
  {
    return this.httpClient.get<Seats[]>('http://localhost:8082/book/bookings') 
   }

   deleteResto(id: any)
   {
     return this.httpClient.delete<Seats[]>(`${'http://localhost:8082/book/bookings/delete'}/${id}`)
   }
   updateResto(id: string,data: any)
   {
     return this.httpClient.put<Seats[]>(`${'http://localhost:8082/book/bookings/update'}/${id}`,data)
   }
}
