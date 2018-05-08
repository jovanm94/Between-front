import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// import { AppRoutingModule } from '../app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    // AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    // AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule {

}
