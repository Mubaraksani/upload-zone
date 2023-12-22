import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-upload-preview',
  templateUrl: './upload-preview.component.html',
  styleUrls: ['./upload-preview.component.css']
})
export class UploadPreviewComponent {
  @Input() file: { fileName: string, dataUrl: string } = { fileName: '', dataUrl: '' };
  @Input() showLabel: boolean = false;
  @Output() removeImage = new EventEmitter<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private domSanitizer: DomSanitizer
  ) {

  }
  ngOnInit(): void {
  }

}

