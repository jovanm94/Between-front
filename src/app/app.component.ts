import { Component } from '@angular/core';
import { HostListener} from '@angular/core';
import { GlobalsService } from '../services/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isScrolling = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {

    this.isScrolling = $event.target.documentElement.scrollTop > 0;
  }

  constructor(public globals: GlobalsService) { }

  getIsScrolling() {
    return this.isScrolling;
  }
}
