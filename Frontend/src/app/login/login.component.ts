import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AserviceService } from '../aservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  x: any;

  adminlog=new FormGroup(
    {
        username: new FormControl('', Validators.required),
        password: new FormControl('',Validators.required)
        
    })
    constructor(private httpClientService: AserviceService,private router:Router) { }
  
  ngOnInit(): void {
  }

  validate()
    {
      //console.warn(this.addResto.value)
      this.httpClientService.saveResto(this.adminlog.value).subscribe((result: any)=>{
        
        this.x=result
        console.warn(this.x.response)
        if(this.x.response=="no"){
          console.warn("result",result) 
          
          alert("enter correct password");
        }
        else
        {
          
          (<any>this.router).navigate(["/admin"]) 
          alert("Welcome ");
                
        }
    })
    } 
}
