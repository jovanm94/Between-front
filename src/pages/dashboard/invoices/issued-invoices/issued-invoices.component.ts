import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issued-invoices',
  templateUrl: './issued-invoices.component.html',
  styleUrls: ['./issued-invoices.component.css']
})
export class IssuedInvoicesComponent implements OnInit {
  cake: Cake[] = [
								{ "id": "123", "type": "None" },
								{ "id": "543", "type": "Glazed" },
								{ "id": "867", "type": "Sugar" },
								{ "id": "867", "type": "Powdered Sugar" },
								{ "id": "345", "type": "Chocolate with Sprinkles" },
								{ "id": "089", "type": "Chocolate" },
                { "id": "123", "type": "None" },
                { "id": "543", "type": "Glazed" },
                { "id": "867", "type": "Sugar" },
                { "id": "867", "type": "Powdered Sugar" },
                { "id": "345", "type": "Chocolate with Sprinkles" },
                { "id": "089", "type": "Chocolate" },
                { "id": "123", "type": "None" },
                { "id": "543", "type": "Glazed" },
                { "id": "867", "type": "Sugar" },
                { "id": "867", "type": "Powdered Sugar" },
                { "id": "345", "type": "Chocolate with Sprinkles" },
                { "id": "089", "type": "Chocolate" },
								{ "id": "890", "type": "Maple" }
							];
  constructor() { }

  ngOnInit() {
  }

}
export interface Cake {
    id;
    type;
  }
