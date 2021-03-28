import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataManagerDetailsComponent } from './data-manager-details.component';

describe('DataManagerDetailsComponent', () => {
  let component: DataManagerDetailsComponent;
  let fixture: ComponentFixture<DataManagerDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataManagerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
