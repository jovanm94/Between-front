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
    if ((this.username != 'matija.maskovic@between.network' && this.password != 'password') || (this.username != 'miljan.gudelj@between.network' && this.password != 'password')) {
      this.errorMessage = 'Wrong username or password';
      this.success = '';
    } else {
      this.errorMessage = '';
      this.success = 'Redirecting...';
      setTimeout(() => {
        this.appService.redirectTo('/dashboard/home');
      }, 600);
    }

  }

}
