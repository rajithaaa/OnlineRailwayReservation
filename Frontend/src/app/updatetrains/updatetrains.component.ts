import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-updatetrains',
  templateUrl: './updatetrains.component.html',
  styleUrls: ['./updatetrains.component.css']
})
export class UpdatetrainsComponent implements OnInit {
  Train:any;
  
  editResto=new FormGroup(
    {
      trainid: new FormControl('', Validators.required),
      train_name: new FormControl('',Validators.required),
      from: new FormControl('',Validators.required),
      to:new FormControl('',Validators.required) ,
      fare: new FormControl('',Validators.required),
      berths: new FormControl('',Validators.required)
    })

  constructor(private router:ActivatedRoute,private httpClientService: HttpClientService) { }

  ngOnInit(): void {
   // console.warn(this.router.snapshot.params.id)
    this.httpClientService.getCurrentResto(this.router.snapshot.params['id']).subscribe((result: any)=>{
   console.warn("result",result)
   this.editResto.patchValue({
    trainid: result.train_id,
    train_name: result.train_name,
    from:result.from,
    to:result.to,
    fare: result.fare,
    berths: result.berths

   })
  }

  
  )
  }
  collection()
  {
   // console.warn(this.editResto.value);
    this.httpClientService.updateResto(this.router.snapshot.params['id'],this.editResto.value).subscribe((result: any)=>{
      
      alert("Updated the train details");
      (<any>this.router).navigate(["/Trains"]);
    })
  }

}