import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseNoteComponent } from './license-note.component';

describe('LicenseNoteComponent', () => {
  let component: LicenseNoteComponent;
  let fixture: ComponentFixture<LicenseNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
