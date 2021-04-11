import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  filterText="";
  title = "Rent A Car";

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.isAuth();
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigateByUrl("/")
  }

}
