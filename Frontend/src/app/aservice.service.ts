import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class login {
  constructor(
    public  username: String,
    public  password: String,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AserviceService {
  constructor(private httpClient: HttpClient) {
  }
  saveResto(data: any)
   {
      return this.httpClient.post<login[]>('http://localhost:9000/ASecure/auth',data)
   }
}
