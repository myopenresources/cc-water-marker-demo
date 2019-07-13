import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CcWaterMarkerModule } from 'cc-water-marker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CcWaterMarkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
