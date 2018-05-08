import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class AppService {

  redirectToRoute: string;

  constructor(private router: Router) {
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
