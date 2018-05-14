import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issued-invoices',
  templateUrl: './issued-invoices.component.html',
  styleUrls: ['./issued-invoices.component.css']
})
export class IssuedInvoicesComponent implements OnInit {

  email;
  invoices: Invoice[];
  constructor() { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    if (this.email == 'matija.maskovic@between.network') {
      this.invoices = [
        { 'number': 'FA/212-18', 'to': 'Ambex', 'issuanceDate': '01.02.2018.',
          'paymentDate': '25.02.2018.' , 'paymentAmount': '100000 RSD', 'status': 'Pending'},
        { 'number': 'FA/213-18', 'to': 'Ambex', 'issuanceDate': '30.04.2018.',
          'paymentDate': '30.06.2018.' , 'paymentAmount': '540000 RSD', 'status': 'Pending'},
        { 'number': 'FA/214-18', 'to': 'Ambex', 'issuanceDate': '30.04.2018.',
          'paymentDate': '29.05.2018.' , 'paymentAmount': '235000 RSD', 'status': 'Pending'}
      ];
    } else {
      this.invoices = [
        { 'number': 'CG/212-18', 'to': 'SCF Solutions', 'issuanceDate': '01.02.2018.',
          'paymentDate': '25.02.2018.' , 'paymentAmount': '100000 RSD', 'status': 'Pending'},
        { 'number': 'CG/213-18', 'to': 'SCF Solutions', 'issuanceDate': '30.04.2018.',
          'paymentDate': '30.06.2018.' , 'paymentAmount': '540000 RSD', 'status': 'Pending'},
        { 'number': 'CG/214-18', 'to': 'SCF Solutions', 'issuanceDate': '30.04.2018.',
          'paymentDate': '29.05.2018.' , 'paymentAmount': '235000 RSD', 'status': 'Pending'}
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
  status: string;
}
