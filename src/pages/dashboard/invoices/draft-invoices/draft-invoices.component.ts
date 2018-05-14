import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft-invoices',
  templateUrl: './draft-invoices.component.html',
  styleUrls: ['./draft-invoices.component.css']
})
export class DraftInvoicesComponent implements OnInit {

  email;
  invoices: Invoice[];
  constructor() { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    if (this.email == 'matija.maskovic@between.network') {
      this.invoices = [
        { 'number': 'FA/212-18', 'to': 'Ambex', 'issuanceDate': '01.02.2018.',
          'paymentDate': '25.02.2018.' , 'paymentAmount': '100000 RSD'},
        { 'number': 'FA/213-18', 'to': 'Ambex', 'issuanceDate': '30.04.2018.',
          'paymentDate': '30.06.2018.' , 'paymentAmount': '540000 RSD'},
        { 'number': 'FA/214-18', 'to': 'Belit', 'issuanceDate': '30.04.2018.',
          'paymentDate': '29.05.2018.' , 'paymentAmount': '235000 RSD'}
      ];
    } else {
      this.invoices = [
        { 'number': 'CG/332-18', 'to': 'SFC Solutions', 'issuanceDate': '02.05.2018.',
          'paymentDate': '02.05.2018.' , 'paymentAmount': '200000 RSD'},
        { 'number': 'CG/333-18', 'to': 'Pwc', 'issuanceDate': '30.03.2018.',
          'paymentDate': '30.05.2018.' , 'paymentAmount': '56000 RSD'},
        { 'number': 'CG/334-18', 'to': 'Mercator S', 'issuanceDate': '25.02.2018.',
          'paymentDate': '25.03.2018.' , 'paymentAmount': '36000 RSD'},
      ];
    }
  }

}
export interface Invoice {
  number: string;
  to: string;
  issuanceDate: string;
  paymentDate: string;
  paymentAmount: string;
}
