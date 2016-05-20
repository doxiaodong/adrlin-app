import {Component, OnInit} from '@angular/core';
import {LoadingService} from './loading.service';

@Component({
  selector: 'loading',
  template: `
    <ActivityIndicator [busy]="loading.isLoading" [visibility]="loading.isLoading ? 'visible' : 'collapse'" row="1" horizontalAlignment="center" verticalAlignment="center"></ActivityIndicator>

  `
})

export class LoadingComponent implements OnInit {

  public loading: any;

  ngOnInit() {
    this.loading = LoadingService;
  }

  constructor() {

  }

}