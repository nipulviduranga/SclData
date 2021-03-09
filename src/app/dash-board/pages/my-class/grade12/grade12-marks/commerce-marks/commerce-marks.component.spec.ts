import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceMarksComponent } from './commerce-marks.component';

describe('CommerceMarksComponent', () => {
  let component: CommerceMarksComponent;
  let fixture: ComponentFixture<CommerceMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerceMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
