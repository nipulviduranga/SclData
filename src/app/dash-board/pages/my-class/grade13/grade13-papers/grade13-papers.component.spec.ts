import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade13PapersComponent } from './grade13-papers.component';

describe('Grade13PapersComponent', () => {
  let component: Grade13PapersComponent;
  let fixture: ComponentFixture<Grade13PapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade13PapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade13PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
