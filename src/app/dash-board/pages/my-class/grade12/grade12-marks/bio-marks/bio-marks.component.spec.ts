import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioMarksComponent } from './bio-marks.component';

describe('BioMarksComponent', () => {
  let component: BioMarksComponent;
  let fixture: ComponentFixture<BioMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
