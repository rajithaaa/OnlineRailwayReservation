import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeleteService } from '../delete.service';
import { HttpClientService } from '../http-client.service';
import { Trains } from '../traindata.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  Seats:any;
  trains: Trains[]=[];
    
  editTicket=new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
      address:new FormControl('',Validators.required) ,
      train: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
      berth: new FormControl('',Validators.required),
      startStation: new FormControl('',Validators.required),
      endStation: new FormControl('',Validators.required)
    })

  constructor(private router:ActivatedRoute,private deleteService: DeleteService){}

  ngOnInit(): void {
    this.deleteService.getCurrentResto(this.router.snapshot.params['id']).subscribe((result: any)=>{
      console.warn("result",result)
      this.editTicket.patchValue({
       name: result.name,
       Email: result.Email,
       age:result.age,
       Address:result.Address,
       trainName: result.trainName,
       date: result.date,
       berth: result.berth,
       startStation: result.startStation,
       endStation: result.endStation
   
      })
    }
    )
  }
    
  
      collection()
      {
       // console.warn(this.editResto.value);
        this.deleteService.updateResto(this.router.snapshot.params['id'],this.editTicket.value).subscribe((result: any)=>{
      
          alert("Updated the ticket details");
          (<any>this.router).navigate(["/Seats"]);
        })
      }
  }


