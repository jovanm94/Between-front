import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '../auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UiModule } from '../ui/ui.module';
import { CoreModule } from '../core/core.module';
import { AppService } from '../app-routing.service';
import { CallBroker } from '../services/CallBroker';
import { NotificationsService } from '../services/notifications.service';
import { EventsService } from '../services/events.service';
import { LoaderAndModalService } from '../services/LoaderAndModal.service';
import { RequestAndResponseInterceptorService } from '../services/RequestAndResponseInterceptor.service';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

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
    FormsModule,
    HttpModule,
    HttpClientModule,
    CoreModule,
    UiModule,
    // mainRoutingModule
    AppRoutingModule,
    AngularMaterial
  ],
  providers: [
    AppService,
    CallBroker,
    NotificationsService,
    EventsService,
    LoaderAndModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestAndResponseInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
