import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderAndModalService {
  showLoader = false;

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor(private zone: NgZone) {}

  unhideLoader() {
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  hideLoader() {
    this.loaderSubject.next(<LoaderState>{show: false});
  }

  setLoader(value: boolean) {
    this.showLoader = value;
  }

  getLoader() {
    return this.showLoader;
  }

  // onCloseModal() {
  //   this.zone.run(() => {
  //     document.getElementsByTagName('body')[0].classList.remove("modalOpened");
  //   });
  // }
  //
  // onOpenModal() {
  //   this.zone.run(() => {
  //     document.getElementsByTagName('body')[0].classList.add("modalOpened");
  //   });
  // }
}
export interface LoaderState {
  show: boolean;
}
