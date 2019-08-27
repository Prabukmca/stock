import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityComponent } from './equity.component';

describe('EquityComponent', () => {
  let component: EquityComponent;
  let fixture: ComponentFixture<EquityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
