import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade10PapersComponent } from './grade10-papers.component';

describe('Grade10PapersComponent', () => {
  let component: Grade10PapersComponent;
  let fixture: ComponentFixture<Grade10PapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade10PapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade10PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
