import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LacFacadeComponent } from './lac-facade.component';

describe('LacFacadeComponent', () => {
  let component: LacFacadeComponent;
  let fixture: ComponentFixture<LacFacadeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LacFacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
