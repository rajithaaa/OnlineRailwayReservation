import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerloginService } from '../passengerlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  
  x: any;

  adminlog=new FormGroup(
    {
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        
    })
    constructor(private httpClientService: PassengerloginService,private router:Router) { }
  
    ngOnInit(): void {
      localStorage.setItem('key','angular')
      

    }

    validate()
    {
      //console.warn(this.addResto.value)
      this.httpClientService.saveResto(this.adminlog.value).subscribe((result: any)=>{
        
      console.warn("result",result)    
        this.x=result
        localStorage.setItem('token',this.x.response);
        console.log(this.x.response)
        if(this.x.response=="no"){
          localStorage.getItem('token');
          (<any>this.router).navigate(["/userlogin"])  
          alert("please enter correct password");
        }
        else
        {
          (<any>this.router).navigate(["/user"])
          alert("Welcome !!");

        }
    })
    }
}