import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-invoice-financing',
  templateUrl: './request-invoice-financing.component.html',
  styleUrls: ['./request-invoice-financing.component.css']
})
export class RequestInvoiceFinancingComponent implements OnInit {

  financiers: Financier[] = [
    { 'invoiceNumber': 'FA/235-18', 'amount': '30000 RSD', 'status': 'Confirmed', 'name': 'Ambex'},
    { 'invoiceNumber': 'CF/202-18', 'amount': '100000 RSD', 'status': 'Confirmed', 'name': 'Pwc'}
  ];
  constructor() { }

  ngOnInit() {
  }

  }
  export interface Financier {
    invoiceNumber;
    amount;
    status;
    name;
  }
