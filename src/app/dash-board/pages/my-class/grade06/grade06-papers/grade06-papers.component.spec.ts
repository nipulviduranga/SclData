import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade06PapersComponent } from './grade06-papers.component';

describe('Grade06PapersComponent', () => {
  let component: Grade06PapersComponent;
  let fixture: ComponentFixture<Grade06PapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade06PapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade06PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
