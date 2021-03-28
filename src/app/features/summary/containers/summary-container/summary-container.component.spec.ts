import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SummaryContainerComponent } from './summary-container.component';

describe('SummaryContainerComponent', () => {
  let component: SummaryContainerComponent;
  let fixture: ComponentFixture<SummaryContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
