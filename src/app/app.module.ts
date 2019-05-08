import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeartbeatLibModule } from 'projects/heartbeat-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HeartbeatLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
