import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityShortTermComponent } from './equity-short-term.component';

describe('EquityShortTermComponent', () => {
  let component: EquityShortTermComponent;
  let fixture: ComponentFixture<EquityShortTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityShortTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityShortTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
