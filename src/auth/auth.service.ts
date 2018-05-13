import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppService } from '../services/app-routing.service';
// import { EventsService } from '../services/events.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor() {}
  // token: string;
  // currentUser: UserModel;
  // users = '/users';
  // // private siteUrl = 'http://192.168.0.17/kompenzacija-api-test';
  // // private siteUrl = 'http://192.168.0.17/kompezacija-api';
  // // VPN
  // private siteUrl = 'http://10.8.0.1/kompezacija-api';
  // // private siteUrl = 'http://api.kompenzuj.biz';
  //
  //
  // // private subject = new ReplaySubject<string>(0);
  // registration = this.siteUrl + this.users + '/register';
  // userLoginUrl = this.siteUrl + this.users + '/login';
  //
  // // // Observable navItem stream
  // // navItem = this.subject.asObservable();
  // // // service command
  //
  //
  // constructor(private http: HttpClient, private zone: NgZone, private appService: AppService, private eventsService: EventsService) {
  // }
  //
  // setToken(token: string) {
  //   this.token = token;
  // }
  //
  // /**
  //  *  Register User
  //  *  Should return 'Successful registration'
  //  *  Receives company name, profession code, address, company registration number, email, password and imageID
  //  */
  //
  // register(companyName: string, professionCode: HashTagModel, city: string, street: string, streetNumber: string, companyRegistrationNumber: string, companyNumber: string, email: string, password: string, mediaId: string = '') {
  //   return this.http.post(this.registration, {naziv: companyName, tag_delatnosti: professionCode, mesto: city, ulica: street, broj_zgrade: streetNumber,
  //     pib: companyRegistrationNumber, maticni_broj: companyNumber, email: email, password: password, logo_id : mediaId});
  // }
  //
  // /**
  //  *  Check user credentials and log in the user
  //  *  Should return user object and auth token
  //  *  Receives user's email and password
  //  */
  //
  // signIn(email: string, password: string) {
  //   return this.http.post(this.userLoginUrl, {email: email, password: password})
  //     .map(
  //       (data: any) => {
  //         // this.token = data.headers.get('Auth');
  //         this.zone.run(() => {
  //           window.localStorage.setItem('token', this.token);
  //           const dataJson = data;
  //           this.setCurrentUser(email, dataJson.korisnik_id, dataJson.delatnost_tag, dataJson.naziv, dataJson.role_id, dataJson.logo_id);
  //           this.addCurrentUserToLocalStorage();
  //         });
  //         return data;
  //       });
  // }
  //
  // isAuthenticated() {
  //   if (!this.token) {
  //     return window.localStorage.getItem('token') != null;
  //   }
  //   return this.token != null;
  // }
  //
  // logout() {
  //   window.localStorage.clear();
  //   this.token = null;
  //   // redirect
  //   if (this.appService.getCurrentUrl() && this.appService.getCurrentUrl() != '/pronadjiPonude') {
  //     this.appService.redirectTo('');
  //   }
  //   this.emitLogout();
  // }
  //
  // emitLogout() {
  //   this.eventsService.emitEvent('logout');
  // }
  //
  // setCurrentUser(email: string, id: string, delatnost: any, naziv: string, role_id: string, logo_id: any) {
  //   this.currentUser = new UserModel(email, id, new HashTagModel(delatnost.id, delatnost.naziv, delatnost.tip));
  //   this.currentUser.name = naziv;
  //   this.currentUser.roleId = role_id;
  //   this.currentUser.logo = logo_id;
  // }
  //
  // addCurrentUserToLocalStorage() {
  //   window.localStorage.setItem('current_user', JSON.stringify(this.currentUser));
  // }
  //
  // returnCurrentUser() {
  //   return JSON.parse(window.localStorage.getItem('current_user'));
  // }
}
