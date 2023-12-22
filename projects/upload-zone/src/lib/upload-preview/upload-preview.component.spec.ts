import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPreviewComponent } from './upload-preview.component';

describe('UploadPreviewComponent', () => {
  let component: UploadPreviewComponent;
  let fixture: ComponentFixture<UploadPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadPreviewComponent]
    });
    fixture = TestBed.createComponent(UploadPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
