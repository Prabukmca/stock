import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicComponentOneComponent } from './dynamic-component-one.component';

describe('DynamicComponentOneComponent', () => {
  let component: DynamicComponentOneComponent;
  let fixture: ComponentFixture<DynamicComponentOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
