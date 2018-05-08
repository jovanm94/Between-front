import { Component } from '@angular/core';
import { HostListener} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isScrolling = false;
  @HostListener('window:scroll', ['$event'])

  onWindowScroll($event) {
    if ($event.target.documentElement.scrollTop > 0) {
      this.isScrolling = true;
    } else {
      this.isScrolling = false;
    }
    console.log($event.target.documentElement.scrollTop)
  }

    constructor() { }
}
