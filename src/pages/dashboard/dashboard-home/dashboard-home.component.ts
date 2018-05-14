import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app-routing.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  email = '';
  currentRoute = '';
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.currentRoute = this.appService.getCurrentRoute();
    console.log(this.currentRoute);
    this.email = localStorage.getItem('email');
  }

}
