import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  islogin:boolean = false;
  constructor(private apiService:AuthService, private router:Router){
    if(this.apiService.token==null){
      this.islogin=false;
   }
   else
     this.islogin=true;
  }
  logout(){
    this.apiService.logout()
    this.islogin= false;
    this.router.navigate(['/']);
  }
}
