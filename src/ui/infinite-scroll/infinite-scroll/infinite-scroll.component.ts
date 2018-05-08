import { OnDestroy } from '@angular/core';

import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
}

// const DEFAULT_SCROLL_POSITION: ScrollPosition = {
//   sH: 0,
//   sT: 0,
//   cH: 0
// };

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements AfterViewInit, OnDestroy {

  private scrollEvent$: any;

  private userScrolledUp$: any;

  // private requestStream$: any;

  private requestOnScroll$: any;

  @Input() scrollCallback: any;

  // @Input() immediateCallback: any;

  // @Input() scrollPercent = 70;

  constructor(private elm: ElementRef) { }

  ngAfterViewInit() {
    this.registerScrollEvent();
    this.streamScrollEvents();
    this.requestCallbackOnScroll();
  }

  private registerScrollEvent() {
    this.scrollEvent$ = Observable.fromEvent(this.elm.nativeElement, 'scroll');
  }

  private streamScrollEvents() {
    this.userScrolledUp$ = this.scrollEvent$
      .map((e: any): ScrollPosition => ({
        sH: e.target.scrollHeight,
        sT: e.target.scrollTop,
        cH: e.target.clientHeight
      }))
      .pairwise()
      .filter((positions: any) => this.isUserScrollingUp(positions) && this.isScrollExpectedPercent(positions[1]));
  }

  private requestCallbackOnScroll() {

    this.requestOnScroll$ = this.userScrolledUp$;

    // if (this.immediateCallback) {
    //   this.requestOnScroll$ = this.requestOnScroll$
    //     .startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]);
    // }

    this.requestOnScroll$
      .exhaustMap(() => { return this.scrollCallback(); })
      .subscribe(() => { });

  }

  private isUserScrollingUp = (positions: any) => {
    return positions[0].sT > positions[1].sT;
  }

  private isScrollExpectedPercent = (position: any) => {
    // return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
    return (position.sT / position.sH) < 0.3;
  }

  ngOnDestroy() {

  }

}
