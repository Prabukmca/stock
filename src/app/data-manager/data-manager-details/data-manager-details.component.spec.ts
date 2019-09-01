import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerDetailsComponent } from './data-manager-details.component';

describe('DataManagerDetailsComponent', () => {
  let component: DataManagerDetailsComponent;
  let fixture: ComponentFixture<DataManagerDetailsComponent>;

  beforeEach(async(() => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
