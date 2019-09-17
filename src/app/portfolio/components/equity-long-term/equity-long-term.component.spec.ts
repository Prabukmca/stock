import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityLongTermComponent } from './equity-long-term.component';

describe('EquityLongTermComponent', () => {
  let component: EquityLongTermComponent;
  let fixture: ComponentFixture<EquityLongTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityLongTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityLongTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
