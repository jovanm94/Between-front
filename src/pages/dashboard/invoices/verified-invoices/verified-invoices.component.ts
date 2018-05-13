import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verified-invoices',
  templateUrl: './verified-invoices.component.html',
  styleUrls: ['./verified-invoices.component.css']
})
export class VerifiedInvoicesComponent implements OnInit {

    cake: Cake[] = [
  								{ "id": "AS", "type": "None" },
  								{ "id": "BG", "type": "Glazed" },
  								{ "id": "RF", "type": "Sugar" },
  								{ "id": "GR", "type": "Powdered Sugar" },
  								{ "id": "HG", "type": "Chocolate with Sprinkles" },
  								{ "id": "XV", "type": "Chocolate" },
  								{ "id": "RT", "type": "Maple" }
  							];

    constructor() { }

    ngOnInit() {
    }

  }
  export interface Cake {
      id;
      type;
    }
