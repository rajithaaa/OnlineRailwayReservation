import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  Seats:any;
  constructor(private httpClientService: DeleteService,
              private router: Router) { }

public getbookbyid(){
  let ord=this.httpClientService.getCurrentResto(this.id);
  ord.subscribe((data)=>this.Seats=data)

}

deleteResto(id: any)
  {
    alert("Confirmation for ticket cancellation");
    this.httpClientService.deleteResto(id).subscribe((result: any)=>{
      console.warn("result",result)
      alert("Your TICKET is cancelled");
      (<any>this.router).navigate(["/user"]);
    })
  }


  ngOnInit(): void {
    let ord=this.httpClientService.getorders();
    ord.subscribe((data)=>this.Seats=data); 
  }

}

