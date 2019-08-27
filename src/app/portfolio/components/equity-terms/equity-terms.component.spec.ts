import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityTermsComponent } from './equity-terms.component';

describe('EquityTermsComponent', () => {
  let component: EquityTermsComponent;
  let fixture: ComponentFixture<EquityTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
