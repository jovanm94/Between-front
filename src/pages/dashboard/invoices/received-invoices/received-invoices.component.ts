import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-received-invoices',
  templateUrl: './received-invoices.component.html',
  styleUrls: ['./received-invoices.component.css']
})
export class ReceivedInvoicesComponent implements OnInit {

  invoices: Invoice[] = [
    { 'number': 'FA/235-18', 'from': 'Ambex', 'issuanceDate': '01.05.2018.', 'paymentDate': '01.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'N/A'},
    { 'number': 'FA/236-18', 'from': 'Ambex', 'issuanceDate': '30.04.2018.', 'paymentDate': '30.06.2018.' , 'paymentAmount': '112590 RSD', 'status': 'Verified'},
    { 'number': 'FA/238-18', 'from': 'Birotex', 'issuanceDate': '30.04.2018.', 'paymentDate': '29.05.2018.' , 'paymentAmount': '50000 RSD', 'status': 'Verified'},
    { 'number': 'CB/109-18', 'from': 'Pwc', 'issuanceDate': '27.04.2018.', 'paymentDate': '13.05.2018.' , 'paymentAmount': '360000 RSD', 'status': 'Declined'},
    { 'number': '231', 'from': 'Mercator S', 'issuanceDate': '20.04.2018', 'paymentDate': '19.06.2018.' , 'paymentAmount': '17000 RSD', 'status': 'Verified'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
export interface Invoice {
    number: string;
    from: string;
    issuanceDate: string;
    paymentDate: string;
    paymentAmount: string;
    status: string;
  }
