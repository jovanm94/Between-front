import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {

  @Input() isScrolling = false;
  @Input() scrolledPercent = 0;

  constructor(private eventsService: EventsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isScrolling && changes.isScrolling.currentValue) {
      this.isScrolling = changes.isScrolling.currentValue;
    }
    if (changes.scrolledPercent && changes.scrolledPercent.currentValue) {
      this.scrolledPercent = changes.scrolledPercent.currentValue;
    }
  }

  emitClickEvent(pageName: string) {
    this.eventsService.emitEvent(pageName);
  }

}
