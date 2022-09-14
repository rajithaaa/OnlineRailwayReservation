import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserloginComponent } from './userlogin/userlogin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userlogin : UserloginComponent,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
        if(localStorage.getItem('token')!=null){
          this.router.navigate(['/userLogin']);
          return false;
        }
    return true;
  }
  
} 
