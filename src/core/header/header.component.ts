import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  dropdown: any = false;
  // overEnabled: boolean = true;

  // @HostListener('window:resize', ['$event'])
  // onWindowResize(event: any) {
  //   this.zone.run(() => {
  //     if (event.target.innerWidth > 768) {
  //       this.dropdown = false;
  //       this.overEnabled = true;
  //     } else {
  //       this.dropdown = false;
  //       this.overEnabled = false;
  //     }
  //   })
  // }

  constructor() {
  }

  over() {
      this.dropdown = !this.dropdown;
  }

  logout() {
    this.dropdown = false;
  }

}
