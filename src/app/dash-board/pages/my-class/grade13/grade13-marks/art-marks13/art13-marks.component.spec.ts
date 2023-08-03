import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art13MarksComponent } from './art13-marks.component';

describe('ArtMarksComponent', () => {
  let component: Art13MarksComponent;
  let fixture: ComponentFixture<Art13MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Art13MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Art13MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
