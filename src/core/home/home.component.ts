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
  @ViewChild('platform') platform: ElementRef;
  @ViewChild('aboutus') aboutus: ElementRef;
  @ViewChild('learnmore') learnmore: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('solution') solution: ElementRef;

  eventSubscription: Subscription;
  constructor(private eventsService: EventsService) {
    this.eventSubscription = this.eventsService.navItem.subscribe((elementName: string) => {
      switch (elementName) {
        case 'contact':
          if (this.contact && this.contact.nativeElement) {
            this.contact.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'platform':
          if (this.platform && this.platform.nativeElement) {
            this.platform.nativeElement.scrollIntoView({ behavior: 'smooth' });
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
        case 'title':
          if (this.title && this.title.nativeElement) {
            this.title.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'solution':
          if (this.solution && this.solution.nativeElement) {
            this.solution.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          break;
      }
    });
  }

  scrollToAboutUs() {
    if (this.aboutus && this.aboutus.nativeElement) {
      this.aboutus.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSolution() {
    if (this.solution && this.solution.nativeElement) {
      this.solution.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onNavigate(person: string) {
    switch (person) {
      case 'miljan':
        window.open('https://www.linkedin.com/in/miljan-gudelj-777b598a/', '_blank');
        break;
      case 'matija':
        window.open('https://www.linkedin.com/in/matija-maskovic-11654ba4/', '_blank');
        break;
      case 'jovan':
        window.open('https://www.linkedin.com/in/jovanmilovanovic01/', '_blank');
        break;
      case 'mladen':
        window.open('https://www.linkedin.com/in/mladen-tu%C5%A1up/', '_blank');
        break;
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

}
