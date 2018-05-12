import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ReceivedInvoicesComponent } from './invoices/received-invoices/received-invoices.component';
import { IssuedInvoicesComponent } from './invoices/issued-invoices/issued-invoices.component';
import { DraftInvoicesComponent } from './invoices/draft-invoices/draft-invoices.component';
import { VerifiedInvoicesComponent } from './invoices/verified-invoices/verified-invoices.component';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    ReceivedInvoicesComponent,
    IssuedInvoicesComponent,
    DraftInvoicesComponent,
    VerifiedInvoicesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    AccordionModule,
    ToolbarModule
  ]
})
export class DashboardModule {

}
