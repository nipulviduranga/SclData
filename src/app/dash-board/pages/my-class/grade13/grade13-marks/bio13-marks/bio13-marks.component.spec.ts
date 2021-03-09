import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bio13MarksComponent } from './bio13-marks.component';

describe('BioMarksComponent', () => {
  let component: Bio13MarksComponent;
  let fixture: ComponentFixture<Bio13MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bio13MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bio13MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
