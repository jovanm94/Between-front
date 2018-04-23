// import { Injectable, Injector } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { AuthService } from '../auth/auth.service';
// import { LoaderAndModalService } from './LoaderAndModal.service';
// import { AppService } from '../app-routing.service';
//
// @Injectable()
// export class RequestAndResponseInterceptorService implements HttpInterceptor {
//
//   constructor(private inj: Injector, public loaderAndModalService: LoaderAndModalService, public appService: AppService) {
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const authService = this.inj.get(AuthService);
//     this.loaderAndModalService.unhideLoader();
//     if (req.url.indexOf('tag/all') >= 0 || req.url.indexOf('checkTicketStatus') >= 0 || req.url.indexOf('latestMessagesAndOffers') >= 0 || req.url.indexOf('addMessage') >= 0 ||
//       req.url.indexOf('getTicketMessages') >= 0 || req.url.indexOf('deleteMedia') >= 0 || req.url.indexOf('deletePost') >= 0) {
//       this.loaderAndModalService.hideLoader();
//     }
//     // Get the auth header from the service.
//     const isLoggedIn = authService.isAuthenticated();
//     if (isLoggedIn) {
//       const authHeader = window.localStorage.getItem('token');
//       // Clone the request to add the new header.
//       const authReq = req.clone({headers: req.headers.set('Auth', authHeader.replace('Bearer ', ''))});
//       // Pass on the cloned request instead of the original request.
//       return next.handle(authReq)
//         .do((data: any) => {
//           if (data && data.status == '200') {
//             this.loaderAndModalService.hideLoader();
//           }
//           return data['body'];
//           // });
//         })
//         .catch(
//           (err: HttpErrorResponse) => {
//             // console.log(err);
//             this.loaderAndModalService.hideLoader();
//             if (err.error) {
//               // A client-side or network error occurred. Handle it accordingly.
//               return Observable.throw(err.error.messages);
//             } else {
//                 // If not authorized send to login and clear user data
//                 if (err.status == 401) {
//                     // const appService = this.inj.get(AppService);
//                     authService.logout();
//                     this.appService.setRedirectToRoute(this.appService.getCurrentUrl());
//                     this.appService.redirectTo('prijava');
//                     return Observable.throw('Istekla je sesija. Molimo Vas prijavite se ponovo.');
//                 }
//                 // console.log(err);
//               // The backend returned an unsuccessful response code.
//               return Observable.throw('Došlo je do neočekivane greške na serveru. Molimo pokušajte ponovo i/ili kontaktirajte nas ukoliko se problem ne otkloni.');
//             }
//           });
//     } else {
//       return next.handle(req)
//         .do((data: any) => {
//           if (data && data.headers && data.headers.get('Auth')) {
//             authService.setToken(data.headers.get('Auth').replace('Bearer ', ''));
//           }
//           // should get user token here
//           if (data && data.status == '200') {
//             this.loaderAndModalService.hideLoader();
//           }
//           return data['body'];
//         })
//         .catch(
//           (err: HttpErrorResponse) => {
//             this.loaderAndModalService.hideLoader();
//             if (err.error) {
//               // A client-side or network error occurred. Handle it accordingly.
//               return Observable.throw(err.error.messages);
//             } else {
//               // The backend returned an unsuccessful response code.
//               return Observable.throw('Došlo je do neočekivane greške na serveru. Molimo pokušajte ponovo i/ili kontaktirajte nas ukoliko se problem ne otkloni.');
//             }
//           });
//     }
//   }
// }
