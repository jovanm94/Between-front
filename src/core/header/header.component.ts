import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {

  @Input() isScrolling: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isScrolling'].currentValue == true) {
      this.isScrolling = true;
    } else {
      this.isScrolling = false;
    }
    console.log(this.isScrolling)
  }
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
