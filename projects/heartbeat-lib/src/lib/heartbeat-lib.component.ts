import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'heartbeat-component',
  template: `
  <span [style.color]="color" [style.font-size.em]="size">
    ♥
  </span>
  `,
  styles: [`
  :host {
    display: inline-block;
  }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeartbeatLibComponent implements OnInit {

  @Input() public color = 'red';
  @Input() public size = 1;

  constructor() { }

  ngOnInit() {
  }

}
