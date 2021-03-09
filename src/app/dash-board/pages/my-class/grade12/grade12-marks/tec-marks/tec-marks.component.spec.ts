import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecMarksComponent } from './tec-marks.component';

describe('TecMarksComponent', () => {
  let component: TecMarksComponent;
  let fixture: ComponentFixture<TecMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
