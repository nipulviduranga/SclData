import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tec13MarksComponent } from './tec13-marks.component';

describe('TecMarksComponent', () => {
  let component: Tec13MarksComponent;
  let fixture: ComponentFixture<Tec13MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tec13MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tec13MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
