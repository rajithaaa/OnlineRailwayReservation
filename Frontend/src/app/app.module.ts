import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TrainComponent } from './train/train.component';
import { TraindataComponent } from './traindata/traindata.component';
import { UpdatetrainsComponent } from './updatetrains/updatetrains.component';
import { PnrComponent } from './pnr/pnr.component';
import { AddtrainsComponent } from './addtrains/addtrains.component';
import { AuthGuard } from './auth.guard';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { NgModule } from "@angular/core";






@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    HomeComponent,
    UserloginComponent,
    UserComponent,
    LoginComponent,
    AdminComponent,
    ContactComponent,
    DetailsComponent,
    ReservationComponent,
    TrainComponent,
    TraindataComponent,
    UpdatetrainsComponent,
    PnrComponent,
    AddtrainsComponent,
    UpdateTicketComponent,
    
  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
    
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
