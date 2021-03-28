import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicComponentTwoComponent } from './dynamic-component-two.component';

describe('DynamicComponentTwoComponent', () => {
  let component: DynamicComponentTwoComponent;
  let fixture: ComponentFixture<DynamicComponentTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
