import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadZoneModule, UploadZoneService } from 'upload-zone';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadZoneModule
  ],
  providers: [UploadZoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
