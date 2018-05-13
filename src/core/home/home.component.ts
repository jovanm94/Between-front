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
  eventSubscription: Subscription;
  constructor(private eventsService: EventsService) {
    this.eventSubscription = this.eventsService.navItem.subscribe((elementName: string) => {
      switch (elementName) {
        case 'contact':
          if (this.contact && this.contact.nativeElement) {
            this.contact.nativeElement.scrollIntoView({ behavior: 'smooth' });
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
