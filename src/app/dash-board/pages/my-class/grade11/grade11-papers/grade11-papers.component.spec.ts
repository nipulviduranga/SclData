import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade11PapersComponent } from './grade11-papers.component';

describe('Grade11PapersComponent', () => {
  let component: Grade11PapersComponent;
  let fixture: ComponentFixture<Grade11PapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade11PapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade11PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
