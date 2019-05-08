import { NgModule, Injector } from '@angular/core';
import { HeartbeatLibComponent } from './heartbeat-lib.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeartbeatLibComponent],
  imports: [ CommonModule ],
  entryComponents: [HeartbeatLibComponent]
})
export class HeartbeatLibModule {

  constructor(injector: Injector) {
    const el = createCustomElement(HeartbeatLibComponent, { injector });
    customElements.define('heartbeat-component', el);
  }
}
