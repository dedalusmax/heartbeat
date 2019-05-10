import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heartbeat-component',
  template: `
  <span [style.color]="color" [style.font-size.em]="size">
    ♥ {{value}}
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
  @Input() public value = 60;

  constructor() { }

  ngOnInit() {
  }

}
