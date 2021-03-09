import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade13Component } from './grade13.component';

describe('Grade13Component', () => {
  let component: Grade13Component;
  let fixture: ComponentFixture<Grade13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
