import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryInletComponent } from './summary-inlet.component';

describe('SummaryInletComponent', () => {
  let component: SummaryInletComponent;
  let fixture: ComponentFixture<SummaryInletComponent>;

  beforeEach(async(() => {
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
