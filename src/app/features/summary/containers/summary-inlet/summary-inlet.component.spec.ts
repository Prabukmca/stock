import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SummaryInletComponent } from './summary-inlet.component';

describe('SummaryInletComponent', () => {
  let component: SummaryInletComponent;
  let fixture: ComponentFixture<SummaryInletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryInletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryInletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
