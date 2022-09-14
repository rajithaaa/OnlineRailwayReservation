import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ContactComponent } from "./contact/contact.component";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PnrComponent } from "./pnr/pnr.component";
import { RegisteruserComponent } from "./registeruser/registeruser.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { TrainComponent } from "./train/train.component";
import { TraindataComponent } from "./traindata/traindata.component";
import { UpdatetrainsComponent } from "./updatetrains/updatetrains.component";
import { UserComponent } from "./user/user.component";
import { UserloginComponent } from "./userlogin/userlogin.component";
import { AddtrainsComponent } from "./addtrains/addtrains.component";
import { AuthGuard } from "./auth.guard";
import { UpdateTicketComponent } from "./update-ticket/update-ticket.component";

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'Trains',component: TrainComponent},
  {path:'update/:id',component: UpdatetrainsComponent},
  {path:'bookSeats', component: ReservationComponent},
  {path:'cancel',component: DetailsComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'home', component: HomeComponent},
  {path: 'helpLine', component: ContactComponent},
  {path: 'AdminLogin', component: LoginComponent},
  {path: 'userreg', component: RegisteruserComponent},
  {path: 'userLogin', component: UserloginComponent},
  {path: 'user',component: UserComponent},
  {path: 'pnr', component: PnrComponent},
  {path: 'trainData', component: TraindataComponent},
  {path: 'add',component:AddtrainsComponent},
  {path:'editTicket',component:UpdateTicketComponent},
  {path:'details',component:DetailsComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
