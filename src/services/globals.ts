import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class GlobalsService {

  constructor(private router: Router) {
    this.getCurrentRoute();
  }
  getCurrentRoute() {
    return this.router.url;
  }
}
