import { Component } from '@angular/core';
import { HostListener} from '@angular/core';
import {AppService} from '../services/app-routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isScrolling = false;
  scrolledPercent = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    let winScroll = $event.target.documentElement.scrollTop;
    this.isScrolling = winScroll > 0;
    let height = $event.target.documentElement.scrollHeight - $event.target.documentElement.clientHeight;
    this.scrolledPercent = (winScroll / height) * 100;
  }

  constructor(public appService: AppService) { }

}
