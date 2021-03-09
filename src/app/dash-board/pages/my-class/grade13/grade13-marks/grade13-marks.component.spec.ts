import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade13MarksComponent } from './grade13-marks.component';

describe('Grade13MarksComponent', () => {
  let component: Grade13MarksComponent;
  let fixture: ComponentFixture<Grade13MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade13MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade13MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
