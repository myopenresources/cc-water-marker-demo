import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WaterMarkerModule } from 'cc-water-marker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WaterMarkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
