import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-upload-zone',
  templateUrl: './upload-zone.component.html',
  styleUrls: ['./upload-zone.component.css']
})
export class UploadZoneComponent {

@Input() labelName: string = 'Upload Images here';
@Output() imagesUploaded = new EventEmitter<{ fileName: string, dataUrl: string }[]>();

  onFileSelected(event: any): void {
    const files = event.target.files;
    const uploadedImages: { fileName: string, dataUrl: string }[] = [];
    if (files) {
      for (const file of files) {
        if(this.isValidImageFile(file)){
          const reader = new FileReader();
          reader.onload = (e: any) => {
            uploadedImages.push({ fileName: file.name, dataUrl: e.target.result });
          };
          reader.readAsDataURL(file);
        }else{
          console.error('Invalid file type', file.name, file.type);
        }
      }
      this.imagesUploaded.emit(uploadedImages);
    }
  }

  private isValidImageFile(file: File): boolean {
    const validExtensions = ['jpg', 'jpeg', 'png'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    return validExtensions.includes(fileExtension);
  }
}
