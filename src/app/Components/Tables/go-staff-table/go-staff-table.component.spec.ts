import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoStaffTableComponent } from './go-staff-table.component';

describe('GoStaffTableComponent', () => {
  let component: GoStaffTableComponent;
  let fixture: ComponentFixture<GoStaffTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoStaffTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoStaffTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
