import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade08PapersComponent } from './grade08-papers.component';

describe('Grade08PapersComponent', () => {
  let component: Grade08PapersComponent;
  let fixture: ComponentFixture<Grade08PapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade08PapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade08PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
