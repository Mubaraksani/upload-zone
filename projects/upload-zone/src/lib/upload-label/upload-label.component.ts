import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-upload-label',
  templateUrl: './upload-label.component.html',
  styleUrls: ['./upload-label.component.css']
})
export class UploadLabelComponent implements OnInit{
  @Input() labelText: string = 'Upload Images';

  ngOnInit(): void {
  }

}
