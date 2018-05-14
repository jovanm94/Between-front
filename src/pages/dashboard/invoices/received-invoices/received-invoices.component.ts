import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {EventsService} from '../../../../services/events.service';

@Component({
  selector: 'app-received-invoices',
  templateUrl: './received-invoices.component.html',
  styleUrls: ['./received-invoices.component.css']
})
export class ReceivedInvoicesComponent implements OnInit {

  email;
  invoices: Invoice[];

  constructor(private confirmationService: ConfirmationService, private events: EventsService) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    if (this.email == 'matija.maskovic@between.network') {
      this.invoices = [
        { 'number': 'CG/235-18', 'from': 'Ambex', 'issuanceDate': '01.05.2018.',
          'paymentDate': '01.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Pending'},
        { 'number': 'CG/236-18', 'from': 'Ambex', 'issuanceDate': '30.04.2018.',
          'paymentDate': '30.06.2018.' , 'paymentAmount': '112590 RSD', 'status': 'Pending'},
        { 'number': 'AB/109-18', 'from': 'Pwc', 'issuanceDate': '27.04.2018.',
          'paymentDate': '13.05.2018.' , 'paymentAmount': '360000 RSD', 'status': 'Pending'},
        { 'number': '231', 'from': 'Mercator S', 'issuanceDate': '20.04.2018',
          'paymentDate': '19.06.2018.' , 'paymentAmount': '17000 RSD', 'status': 'Pending'}
      ];
    } else {
      this.invoices = [
        { 'number': 'FA/235-18', 'from': 'SCF Solutions', 'issuanceDate': '01.05.2018.',
          'paymentDate': '01.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Pending'},
        { 'number': 'FA/236-18', 'from': 'SCF Solutions', 'issuanceDate': '30.04.2018.',
          'paymentDate': '30.06.2018.' , 'paymentAmount': '112590 RSD', 'status': 'Pending'},
        { 'number': 'AB/109-18', 'from': 'Pwc', 'issuanceDate': '27.04.2018.',
          'paymentDate': '13.05.2018.' , 'paymentAmount': '360000 RSD', 'status': 'Pending'},
        { 'number': '231', 'from': 'Belit', 'issuanceDate': '20.04.2018',
          'paymentDate': '19.06.2018.' , 'paymentAmount': '17000 RSD', 'status': 'Pending'}
      ];
    }
  }

  confirm() {
    let newArray;
    if (this.email == 'matija.maskovic@between.network') {
      newArray = [
        { 'number': 'CG/236-18', 'from': 'Ambex', 'issuanceDate': '30.04.2018.',
          'paymentDate': '30.06.2018.' , 'paymentAmount': '112590 RSD', 'status': 'Pending'},
        { 'number': 'AB/109-18', 'from': 'Pwc', 'issuanceDate': '27.04.2018.',
          'paymentDate': '13.05.2018.' , 'paymentAmount': '360000 RSD', 'status': 'Pending'},
        { 'number': '231', 'from': 'Mercator S', 'issuanceDate': '20.04.2018',
          'paymentDate': '19.06.2018.' , 'paymentAmount': '17000 RSD', 'status': 'Pending'}
      ];
    } else {
      newArray = [
        { 'number': 'FA/236-18', 'from': 'SCF Solutions', 'issuanceDate': '30.04.2018.',
          'paymentDate': '30.06.2018.' , 'paymentAmount': '112590 RSD', 'status': 'Pending'},
        { 'number': 'AB/109-18', 'from': 'Pwc', 'issuanceDate': '27.04.2018.',
          'paymentDate': '13.05.2018.' , 'paymentAmount': '360000 RSD', 'status': 'Pending'},
        { 'number': '231', 'from': 'Belit', 'issuanceDate': '20.04.2018',
          'paymentDate': '19.06.2018.' , 'paymentAmount': '17000 RSD', 'status': 'Pending'}
      ];
    }
    this.confirmationService.confirm({
      message: 'Are you sure you wish to verify this transaction?',
      accept: () => {
        this.events.emitEvent('verified');
        this.invoices = [...newArray];
      }
    });
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
