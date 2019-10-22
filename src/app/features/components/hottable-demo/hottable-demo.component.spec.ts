import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HottableDemoComponent } from './hottable-demo.component';

describe('HottableDemoComponent', () => {
  let component: HottableDemoComponent;
  let fixture: ComponentFixture<HottableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HottableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HottableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
