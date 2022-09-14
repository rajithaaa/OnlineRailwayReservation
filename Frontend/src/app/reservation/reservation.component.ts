import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Trains, HttpClientService } from '../http-client.service';
import { TraindataService } from '../traindata.service';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  constructor(private httpClientService: UserServiceService, private router: Router, private httpClientServic: HttpClientService, private httpClientServi: TraindataService) { }
  bookSeats:any;
    
      //id: new FormControl('',Validators.required),
     
    trains: Trains[]=[];
    
    
  
    ngOnInit(): void {


      this.bookSeats=new FormGroup({
        
      "name":new FormControl('',Validators.required),
      "email": new FormControl('',[Validators.required, Validators.email]),
      "age":new FormControl('',Validators.required),
      "address":new FormControl('',Validators.required),
      "train":new FormControl('',Validators.required),
      "date": new FormControl('',Validators.required),
      "berth":new FormControl('',Validators.required),
      "startStation": new FormControl('',Validators.required),
      "endStation":new FormControl('',Validators.required),
      
      "credit":new FormControl('',Validators.required),
    
      });


      this.httpClientServic.getTrains().subscribe((result)=>{
        console.warn(result)
        this.trains=result
      })
    } 



  submitData(){
    console.log(this.bookSeats.value);
    if(this.bookSeats.valid){
      alert("thank you${this.bookSeats.value.name}")
    }
    
  }
    collectTicks()
    {
      
      //console.warn(this.addResto.value)
      this.httpClientService.saveTrains(this.bookSeats.value).subscribe((result: any)=>{
        console.warn("result",result);

        (<any>this.router).navigate(["/pnr"])
        alert('Booked your ticket!!')
        }
        )
        
       } 
      
    
    get name(){return this.bookSeats.get('name');}
    get email(){return this.bookSeats.get('email');}
    get age(){return this.bookSeats.get('age');}
    get address(){return this.bookSeats.get('address');}
    get train(){return this.bookSeats.get('train');}
    get date(){return this.bookSeats.get('date');}
    get berth(){return this.bookSeats.get('berth');}
    get startStation(){return this.bookSeats.get('startStation');}
    get endStation(){return this.bookSeats.get('endStation');}
    
    
    
    
   
search()
{
 // console.warn(this.editResto.value);
  // this.httpClientServi.updateResto(text).subscribe((result: any)=>{
  //   console.warn(result)
  //   this.trains=result
  // })
}

search1()
{
 // console.warn(this.editResto.value);
  // this.httpClientServi.updateRest(text1).subscribe((result: any)=>{
  //   console.warn(result)
  //   this.trains=result
  // })
}
}
