import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultNoteComponent } from './consult-note.component';

describe('ConsultNoteComponent', () => {
  let component: ConsultNoteComponent;
  let fixture: ComponentFixture<ConsultNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
