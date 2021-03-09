import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade12PapersComponent } from './grade12-papers.component';

describe('Grade12PapersComponent', () => {
  let component: Grade12PapersComponent;
  let fixture: ComponentFixture<Grade12PapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade12PapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade12PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
