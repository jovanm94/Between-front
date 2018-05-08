import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'registracija', component: SignupComponent, canActivate: [AuthGuard] },
  // { path: 'prijava', component: SigninComponent, canActivate: [AuthGuard] },
  { path: 'prijava', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
