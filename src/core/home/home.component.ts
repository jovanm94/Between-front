import { Component, HostListener, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Subscription } from 'rxjs/Subscription';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('scrollAnimation1', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0) rotate(45deg)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%) rotate(45deg)"
      })),

      transition('show => hide', animate('0.5s ease-out')),
      transition('hide => show', animate('1s 100ms ease-in'))
    ]),
    trigger('scrollAnimation2', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0) rotate(45deg)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%) rotate(45deg)"
      })),
      transition('show => hide', animate('0.5s ease-out')),
      transition('hide => show', animate('1s 600ms ease-in'))
    ]),
    trigger('scrollAnimation3', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0) rotate(45deg)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%) rotate(45deg)"
      })),
      transition('show => hide', animate('0.5s ease-out')),
      transition('hide => show', animate('1s 1100ms ease-in'))
    ]),
    trigger('scrollText1', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('0.5s ease-out')),
      transition('hide => show', animate('1.5s 100ms ease-in'))
    ]),
    trigger('scrollText2', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
    transition('show => hide', animate('0.5s ease-out')),
      transition('hide => show', animate('1.5s 600ms ease-in'))
    ]),
    trigger('scrollText3', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('0.5s ease-out')),
      transition('hide => show', animate('1.5s 1100ms ease-in'))
    ])
  ]
})

export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('contact') contact: ElementRef;
  @ViewChild('platform') platform: ElementRef;
  @ViewChild('aboutus') aboutus: ElementRef;
  @ViewChild('learnmore') learnmore: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('solution') solution: ElementRef;

  state = 'hide'

   @HostListener('window:scroll', ['$event'])
     checkScroll() {
       const componentPosition = this.el.nativeElement.offsetTop;
       const componentPositionUnder = this.el.nativeElement.offsetTop+600;
       const scrollPosition = window.pageYOffset

       if (scrollPosition >= componentPosition && scrollPosition <= componentPositionUnder) {
         this.state = 'hide'
       } else{
         this.state = 'show'
       }
     }

  eventSubscription: Subscription;
  constructor(private eventsService: EventsService, public el: ElementRef) {
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
