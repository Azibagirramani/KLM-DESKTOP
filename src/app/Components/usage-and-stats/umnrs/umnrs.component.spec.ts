import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmnrsComponent } from './umnrs.component';

describe('UmnrsComponent', () => {
  let component: UmnrsComponent;
  let fixture: ComponentFixture<UmnrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmnrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmnrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
