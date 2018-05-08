import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AuthGuard } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
  // // dodaj auth guard
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard]},
  // { path: 'kompanija', loadChildren: './company/company.module#CompanyModule', canLoad: [AuthGuard]},
  // { path: 'zaboravljenaSifra', loadChildren: './password/forgot-password/forgot-password.module#ForgotPasswordModule', canLoad: [AuthGuard]},
  // { path: 'promenaSifre', loadChildren: './password/reset-password/reset-password.module#ResetPasswordModule', canLoad: [AuthGuard]},
  // { path: 'izmenaSifre', loadChildren: './password/change-password/change-password.module#ChangePasswordModule', canLoad: [AuthGuard]},
  // { path: 'verifikacijaKorisnika', loadChildren: './verify-user/verify-user.module#VerifyUserModule', canLoad: [AuthGuard]},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
