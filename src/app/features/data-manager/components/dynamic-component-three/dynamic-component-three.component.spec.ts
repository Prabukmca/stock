import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentThreeComponent } from './dynamic-component-three.component';

describe('DynamicComponentThreeComponent', () => {
  let component: DynamicComponentThreeComponent;
  let fixture: ComponentFixture<DynamicComponentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
