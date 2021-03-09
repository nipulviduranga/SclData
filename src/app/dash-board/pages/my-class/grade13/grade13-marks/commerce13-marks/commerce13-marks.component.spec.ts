import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commerce13MarksComponent } from './commerce13-marks.component';

describe('CommerceMarksComponent', () => {
  let component: Commerce13MarksComponent;
  let fixture: ComponentFixture<Commerce13MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commerce13MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Commerce13MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
