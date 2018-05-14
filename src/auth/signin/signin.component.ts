import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app-routing.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage= '';
  username = '';
  password = '';
  success = '';
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  login() {
    if ((this.username != 'matija.maskovic@between.network' && this.password != 'password')
      || (this.username != 'miljan.gudelj@between.network' && this.password != 'password')) {
      setTimeout(() => {
        this.errorMessage = 'Wrong username or password';
        this.success = '';
      }, 300);
    } else {
      this.errorMessage = '';
      this.success = 'Redirecting...';
      localStorage.setItem('loggedIn', 'true');
      if (this.username == 'matija.maskovic@between.network') {
        localStorage.setItem('email', 'matija.maskovic@between.network');
      } else {
        localStorage.setItem('email', 'miljan.gudelj@between.network');
      }
      setTimeout(() => {
        this.appService.redirectTo('/dashboard/home');
      }, 600);
    }
  }
}
