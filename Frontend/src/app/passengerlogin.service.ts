import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class userlogin {
  constructor(
    public  username: String,
    public  password: String,
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class PassengerloginService {

  constructor(private httpClient: HttpClient) {
  }
  saveResto(data: any)
   {
      return this.httpClient.post<userlogin[]>('http://localhost:8888/Secure/auth',data)
   }
  

   
}

  

// generateToken(credentials:any)
//     {
//       return this.http.post(`${this.url}`, credentials,{responseType:'text'as'json'})
//     }
//    

//   isLoggedIn()
//   {
//     let token=localStorage.getItem("token");
//     if(token==undefined || token==='' || token==null)
//     {
//       return false;
//     }else
//     {
//       return true;
//     }
//   }

//   logout()
//   {
//     localStorage.removeItem('token');
//     return true
//   }

//   getToken()
//   {
//     return localStorage.getItem("token")
//   }
// }

// ------------------------------------------?
// generateToken(adminlog:any)
//     {
//       return this.http.post(`${this.url}`,   ,{responseType:'text'as'json'})
//     }
//     userlogin(token: string)
//     {localStorage.setItem("token",token)
//     return true;
  