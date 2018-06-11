import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app-routing.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public appService: AppService, private authService: AuthService) { }

  ngOnInit() {
  }

  goToReceived() {
    this.appService.redirectTo('dashboard/invoices/received');
  }

  logout() {
    this.authService.logout();
    this.appService.redirectTo('/');
  }

}
