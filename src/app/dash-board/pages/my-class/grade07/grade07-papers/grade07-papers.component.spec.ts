import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade07PapersComponent } from './grade07-papers.component';

describe('Grade07PapersComponent', () => {
  let component: Grade07PapersComponent;
  let fixture: ComponentFixture<Grade07PapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade07PapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade07PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
