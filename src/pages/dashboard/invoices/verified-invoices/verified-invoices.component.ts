import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../../../services/events.service';

@Component({
  selector: 'app-verified-invoices',
  templateUrl: './verified-invoices.component.html',
  styleUrls: ['./verified-invoices.component.css']
})
export class VerifiedInvoicesComponent implements OnInit {

  email;
  eventSubscription: any;
  invoices: Invoice[];

    constructor(private eventsService: EventsService) {
      this.eventSubscription = this.eventsService.navItem.subscribe((verified: string) => {
        if (verified == 'verified') {
          this.addInvoice();
        }
      });
    }

    ngOnInit() {
      this.email = localStorage.getItem('email');
      if (this.email == 'matija.maskovic@between.network') {
        this.invoices = [
          { 'number': 'CG/235-18', 'from': 'Ambex', 'issuanceDate': '01.05.2018.',
            'paymentDate': '01.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Verified'},
          { 'number': 'CG/101-18', 'from': 'Ambex', 'issuanceDate': '02.05.2018.',
            'paymentDate': '02.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Verified'},
          { 'number': 'CG/102-18', 'from': 'Ambex', 'issuanceDate': '30.03.2018.',
            'paymentDate': '30.05.2018.' , 'paymentAmount': '112590 RSD', 'status': 'Verified'},
          { 'number': 'FA/230-18', 'from': 'Mercator S', 'issuanceDate': '25.02.2018.',
            'paymentDate': '25.03.2018.' , 'paymentAmount': '50000 RSD', 'status': 'Verified'},
        ];
      } else {
        this.invoices = [
          { 'number': 'CG/235-18', 'from': 'SCF Solutions', 'issuanceDate': '01.05.2018.',
            'paymentDate': '01.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Verified'},
          { 'number': 'FA/101-18', 'from': 'SCF Solutions', 'issuanceDate': '02.05.2018.',
            'paymentDate': '02.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Verified'},
          { 'number': 'ST/230-18', 'from': 'Belit', 'issuanceDate': '25.02.2018.',
            'paymentDate': '25.03.2018.' , 'paymentAmount': '50000 RSD', 'status': 'Verified'},
        ];
      }
    }

    addInvoice() {
      // console.log('aa')
      // let newArray = [
      //   { 'number': 'CG/235-18', 'from': 'Ambex', 'issuanceDate': '01.05.2018.',
      //     'paymentDate': '01.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Verified'},
      //   { 'number': 'CG/101-18', 'from': 'Ambex', 'issuanceDate': '02.05.2018.',
      //     'paymentDate': '02.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Verified'},
      //   { 'number': 'CG/102-18', 'from': 'Ambex', 'issuanceDate': '30.03.2018.',
      //     'paymentDate': '30.05.2018.' , 'paymentAmount': '112590 RSD', 'status': 'Verified'},
      //   { 'number': 'FA/230-18', 'from': 'Mercator S', 'issuanceDate': '25.02.2018.',
      //     'paymentDate': '25.03.2018.' , 'paymentAmount': '50000 RSD', 'status': 'Verified'},
      // ];
      // this.invoices = [...newArray];

      // { 'number': 'FA/235-18', 'from': 'SCF Solutions', 'issuanceDate': '01.05.2018.',
      //   'paymentDate': '01.05.2018.' , 'paymentAmount': '345000 RSD', 'status': 'Verified'},
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
