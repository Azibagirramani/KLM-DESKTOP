import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlmGoComponent } from './klm-go.component';

describe('KlmGoComponent', () => {
  let component: KlmGoComponent;
  let fixture: ComponentFixture<KlmGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlmGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlmGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
