import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class AppService {

  redirectToRoute: string;

  constructor(private router: Router) {
    this.router.events
      .filter(event => event instanceof NavigationEnd || event instanceof NavigationStart)
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  getCurrentRoute() {
    return this.router.url;
  }

  redirectTo(path: any) {
    this.router.navigate(['/' + path]);
  }
  redirectToWithParams(path: any, params: any) {
    this.router.navigate(['/' + path, params]);
  }

  setRedirectToRoute(routeUrl: any) {
    this.redirectToRoute = routeUrl;
  }

  getRedirectToRoute() {
    return this.redirectToRoute;
  }

  getCurrentUrl() {
    return this.router.url;
  }

}
