import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserEventsExperimentsComponent } from './browser-events-experiments.component';

describe('BrowserEventsExperimentsComponent', () => {
  let component: BrowserEventsExperimentsComponent;
  let fixture: ComponentFixture<BrowserEventsExperimentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserEventsExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserEventsExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
