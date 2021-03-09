import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtMarksComponent } from './art-marks.component';

describe('ArtMarksComponent', () => {
  let component: ArtMarksComponent;
  let fixture: ComponentFixture<ArtMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
