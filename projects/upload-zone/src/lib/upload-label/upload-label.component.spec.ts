import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLabelComponent } from './upload-label.component';

describe('UploadLabelComponent', () => {
  let component: UploadLabelComponent;
  let fixture: ComponentFixture<UploadLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadLabelComponent]
    });
    fixture = TestBed.createComponent(UploadLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
