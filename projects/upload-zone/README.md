# UploadZone

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.


## Install

```
$ npm install --save upload-zone
```

## Usage 
```js
// in app.module.ts 
import { UploadZoneModule } from 'upload-zone';

  imports: [
   ...
    UploadZoneModule
  ],
   ...
export class AppModule { }   
```

```html
<!-- in app.component.html -->
<div>
  <lib-upload-zone (imagesUploaded)="onFileUpload($event)">
    <lib-upload-preview *ngFor="let f of files; let i = index" [file]="f" [showLabel]="true"
     (removeImage)="onRemoveImage(i)">
    </lib-upload-preview>
  </lib-upload-zone>
</div>
```
```js
//in app.component.ts
files: { fileName: string, dataUrl: string }[] = [];

onFileUpload(event:any): void {
    this.files = event;
    
  }

  onRemoveImage(index: any) {
    if (index >= 0 && index < this.files.length) {
      this.files.splice(index, 1);
    }
  }
```

 
## Code scaffolding

Run `ng generate component component-name --project upload-zone` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project upload-zone`.
> Note: Don't forget to add `--project upload-zone` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build upload-zone` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build upload-zone`, go to the dist folder `cd dist/upload-zone` and run `npm publish`.

## Running unit tests

Run `ng test upload-zone` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
