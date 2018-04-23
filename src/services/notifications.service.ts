import { Injectable, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CallBroker } from './CallBroker';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class NotificationsService implements OnDestroy {

  urlToGoTo: string;
  routerObservable: Subscription;
  getNotificationsObservable: Subscription;
  numOfNotifications: string;
  currentUser: any;

  constructor(private authService: AuthService, private router: Router, private callBroker: CallBroker) {
    this.routerObservable = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        this.urlToGoTo = event.url;
        // if (event.url != '/dashboard/mojeRazmene/sve') {
          this.getNumOfNotifications();
        // }
      });
  }

  getNumOfNotifications() {
    // this.currentUser = this.authService.returnCurrentUser();
    // if (!(this.currentUser && this.currentUser.id)) {
    //   return;
    // }
    // this.getNotificationsObservable = this.callBroker.getUserTicketNotifications(this.currentUser.id, '').subscribe(
    //   (response: any) => {
    //     this.numOfNotifications = response.numberOfChanges;
    //   },
    //   (error: any) => {
    //   });
  }

  ngOnDestroy() {
    if (this.routerObservable) {
      this.routerObservable.unsubscribe();
    }
    if (this.getNotificationsObservable) {
      this.getNotificationsObservable.unsubscribe();
    }
  }
}
