import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LacComponent } from './lac.component';

describe('LacComponent', () => {
  let component: LacComponent;
  let fixture: ComponentFixture<LacComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
