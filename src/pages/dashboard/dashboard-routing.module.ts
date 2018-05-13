import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {ReceivedInvoicesComponent} from './invoices/received-invoices/received-invoices.component';
import {IssuedInvoicesComponent} from './invoices/issued-invoices/issued-invoices.component';
import {DraftInvoicesComponent} from './invoices/draft-invoices/draft-invoices.component';
import {VerifiedInvoicesComponent} from './invoices/verified-invoices/verified-invoices.component';
import { RequestInvoiceFinancingComponent } from './request-invoice-financing/request-invoice-financing.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { CounterpartiesComponent } from './counterparties/counterparties.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: DashboardHomeComponent},
      { path: 'invoices/received', component: ReceivedInvoicesComponent},
      { path: 'invoices/issued', component: IssuedInvoicesComponent},
      { path: 'invoices/verified', component: VerifiedInvoicesComponent},
      { path: 'invoices/draft', component: DraftInvoicesComponent},
      { path: 'invoiceFinancing', component: RequestInvoiceFinancingComponent},
      { path: 'generateReports', component: GenerateReportsComponent},
      { path: 'counterparties', component: CounterpartiesComponent}
      // { path: '', redirectTo: 'mojeRazmene/sve', pathMatch: 'full' },
    // { path: 'mojePonude', redirectTo: 'mojePonude/sve', pathMatch: 'full' },
    // { path: 'mojeRazmene', redirectTo: 'mojeRazmene/sve', pathMatch: 'full' },
    // { path: 'mojProfil', component: MyProfileComponent },
    // { path: 'mojePonude/:type', component: MyOffersComponent },
    // { path: 'mojeRazmene/:type', component: MyTradesComponent },
    // { path: 'mojaPotrazivanja', component: MyTransactionsComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
