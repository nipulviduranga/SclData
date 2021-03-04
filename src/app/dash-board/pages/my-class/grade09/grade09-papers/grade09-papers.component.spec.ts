import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade09PapersComponent } from './grade09-papers.component';

describe('Grade09PapersComponent', () => {
  let component: Grade09PapersComponent;
  let fixture: ComponentFixture<Grade09PapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade09PapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade09PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
