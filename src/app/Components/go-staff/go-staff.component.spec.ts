import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoStaffComponent } from './go-staff.component';

describe('GoStaffComponent', () => {
  let component: GoStaffComponent;
  let fixture: ComponentFixture<GoStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
