import { ChangeDetectorRef, Component } from '@angular/core';
import { UploadZoneService } from 'upload-zone';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-zone-test';
  files: { fileName: string, dataUrl: string }[] = [];

  constructor(
    private fileUploadService: UploadZoneService,
    private cdr : ChangeDetectorRef
    ) {}

  onFileUpload(event:any): void {
    this.files = event;
  }

  onRemoveImage(index: any) {
    if (index >= 0 && index < this.files.length) {
      this.files.splice(index, 1);
    }
  }
}
