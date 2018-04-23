import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderAndModalService, LoaderState } from '../../services/LoaderAndModal.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show = false;

  private subscription: Subscription;

  constructor(private loaderAndModalService: LoaderAndModalService) { }

  ngOnInit() {
    this.subscription = this.loaderAndModalService.loaderState
        .subscribe((state: LoaderState) => {
          this.show = state.show;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
