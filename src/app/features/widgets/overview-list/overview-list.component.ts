import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overview-list',
  template: `
<mat-list role="list">
  <mat-list-item role="listitem">Item 1</mat-list-item>
  <mat-list-item role="listitem">Item 2</mat-list-item>
  <mat-list-item role="listitem">Item 3</mat-list-item>
</mat-list>

  `,
  styles: [
  ]
})
export class OverviewListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
