import { NgModule } from '@angular/core';
import { UploadZoneComponent } from './upload-zone/upload-zone.component';
import { UploadPreviewComponent } from './upload-preview/upload-preview.component';
import { CommonModule } from '@angular/common';
import { UploadLabelComponent } from './upload-label/upload-label.component';



@NgModule({
  declarations: [
    UploadZoneComponent,
    UploadPreviewComponent,
    UploadLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UploadZoneComponent,
    UploadPreviewComponent,
    UploadLabelComponent
  ]
})
export class UploadZoneModule { }
