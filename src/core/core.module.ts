import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { AppRoutingModule } from '../app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule {

}
