import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heartbeat',
  template: `
  <span [style.color]="color" [style.font-size.em]="size">
    ♥
  </span>
  `,
  styles: [`
  :host {
    display: inline-block;
  }
  `]
})
export class HeartbeatLibComponent implements OnInit {

  @Input() public color = 'red';
  @Input() public size = 1;

  constructor() { }

  ngOnInit() {
  }

}
