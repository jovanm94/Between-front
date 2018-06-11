import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '../auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { AppService } from '../services/app-routing.service';
import { CallBroker } from '../services/CallBroker';
import { NotificationsService } from '../services/notifications.service';
import { EventsService } from '../services/events.service';
import { LoaderAndModalService } from '../services/LoaderAndModal.service';
import { RequestAndResponseInterceptorService } from '../services/RequestAndResponseInterceptor.service';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalsService } from '../services/globals';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    // pagesModules
    AuthModule,
    // angularModules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    // mainRoutingModule
    AppRoutingModule
  ],
  providers: [
    AppService,
    CallBroker,
    NotificationsService,
    EventsService,
    LoaderAndModalService,
    ConfirmationService,
    GlobalsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestAndResponseInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
