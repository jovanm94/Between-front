import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class EventsService {

  private subject = new ReplaySubject<any>(1);

  // Observable navItem stream
  navItem = this.subject.asObservable();
  // service command

  emitEvent(eventParams: any) {
    this.subject.next(eventParams);
  }

}
