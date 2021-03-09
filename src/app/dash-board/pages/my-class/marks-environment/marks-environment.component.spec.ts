import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksEnvironmentComponent } from './marks-environment.component';

describe('MarksEnvironmentComponent', () => {
  let component: MarksEnvironmentComponent;
  let fixture: ComponentFixture<MarksEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
