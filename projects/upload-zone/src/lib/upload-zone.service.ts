import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadZoneService {
  private uploadedImages: File[] = [];

  getImages(): File[] {
    return this.uploadedImages;
  }

addImages(event: any) {
  try {
    const files = event.target.files;
    console.log(files);
    
    // this.uploadedImages = this.uploadedImages.concat(images);
  } catch (error) {
    console.error('Error adding images:', error);
  }
}


  removeImage(index: number) {
    if (index >= 0 && index < this.uploadedImages.length) {
      this.uploadedImages.splice(index, 1);
    }
  }
}
