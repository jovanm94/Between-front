import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('contact') contact: ElementRef;
  @ViewChild('technology') technology: ElementRef;
  @ViewChild('team') team: ElementRef;
  @ViewChild('aboutus') aboutus: ElementRef;
  @ViewChild('learnmore') learnmore: ElementRef;

  eventSubscription: Subscription;
  constructor(private eventsService: EventsService) {
    this.eventSubscription = this.eventsService.navItem.subscribe((elementName: string) => {
      switch (elementName) {
        case 'contact':
          if (this.contact && this.contact.nativeElement) {
            this.contact.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'technology':
          if (this.technology && this.technology.nativeElement) {
            this.technology.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'team':
          if (this.team && this.team.nativeElement) {
            this.team.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'aboutus':
          if (this.aboutus && this.aboutus.nativeElement) {
            this.aboutus.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'learnmore':
          if (this.learnmore && this.learnmore.nativeElement) {
            this.learnmore.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          break;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

}
