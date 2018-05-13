import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-received-invoices',
  templateUrl: './received-invoices.component.html',
  styleUrls: ['./received-invoices.component.css']
})
export class ReceivedInvoicesComponent implements OnInit {

  cake: Cake[] = [
								{ "id": "5001", "type": "None" },
								{ "id": "5002", "type": "Glazed" },
								{ "id": "5005", "type": "Sugar" },
								{ "id": "5007", "type": "Powdered Sugar" },
								{ "id": "5006", "type": "Chocolate with Sprinkles" },
								{ "id": "5003", "type": "Chocolate" },
								{ "id": "5004", "type": "Maple" }
							];

  constructor() { }

  ngOnInit() {
  }

}
export interface Cake {
    id;
    type;
  }
