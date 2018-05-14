import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../services/app-routing.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<CanComponentDeactivate>, CanLoad {

  constructor(private authService: AuthService, private appService: AppService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (state.url == '/login' || state.url == '/register') {
      if (!this.authService.isAuthenticated()) {
        return true;
      } else {
        this.appService.redirectTo('');
        return false;
      }
    }
    // if (state.url == '/registracija' || state.url == '/prijava') {
    //   if (!this.authService.isAuthenticated()) {
    //     return true;
    //   } else {
    //     this.appService.redirectTo('');
    //     return false;
    //   }
    // }
    // if (this.authService.isAuthenticated()) {
    //   return true;
    // } else {
    //   this.appService.setRedirectToRoute(state.url);
    //   this.appService.redirectTo('prijava');
    //   return false;
    // }
    // return false;
    return true;
  }

  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    // if (route.path == 'zaboravljenaSifra' || route.path == 'promenaSifre') {
    //   if (this.authService.isAuthenticated()) {
    //     this.appService.redirectTo('dashboard/mojProfil');
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
    // // if (route.path == 'promenaSifre') {
    // //   if (this.authService.isAuthenticated()) {
    // //     this.appService.redirectTo('dashboard/mojProfil');
    // //     return false;
    // //   } else {
    // //     return true;
    // //   }
    // // }
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.appService.redirectTo('login');
      // this.appService.setRedirectToRoute(route.path);
      return false;
    }
    // return false;
  }
}
