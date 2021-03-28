import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LacContainerComponent } from './lac-container.component';

describe('LacContainerComponent', () => {
  let component: LacContainerComponent;
  let fixture: ComponentFixture<LacContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LacContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
