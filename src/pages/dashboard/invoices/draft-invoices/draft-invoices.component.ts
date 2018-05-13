import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft-invoices',
  templateUrl: './draft-invoices.component.html',
  styleUrls: ['./draft-invoices.component.css']
})
export class DraftInvoicesComponent implements OnInit {
  cake: Cake[] = [
								{ "id": "ERT3633", "type": "None" },
								{ "id": "TER3534", "type": "Glazed" },
								{ "id": "3456HTH", "type": "Sugar" },
								{ "id": "FF44444", "type": "Powdered Sugar" },
								{ "id": "242342H", "type": "Chocolate" },
                { "id": "ERT3633", "type": "None" },
                { "id": "TER3534", "type": "Glazed" },
                { "id": "3456HTH", "type": "Sugar" },
                { "id": "FF44444", "type": "Powdered Sugar" },
                { "id": "242342H", "type": "Chocolate" },
								{ "id": "TRYR446", "type": "Maple" }
							];
  constructor() { }

  ngOnInit() {
  }

}
export interface Cake {
    id;
    type;
  }
