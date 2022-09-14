import { Component, OnInit } from '@angular/core';
import {HttpClientService, Trains} from '../http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  trains: Trains[] = [];

  constructor(private httpClientService: HttpClientService, private router:Router) { }

  ngOnInit(): void {
    this.httpClientService.getTrains().subscribe((result)=>{
      
      this.trains=result
    })
  }
  deleteTrains(trai: any)
  {
    alert("Confirmation for ticket cancellation");
    this.trains.splice(trai-1,1)
    this.httpClientService.deleteTrains(trai).subscribe((result: any)=>{
      console.warn("result",result)
      alert("Train deleted from the list");
      (<any>this.router).navigate(["/user"]);
    })
  }
 

} 