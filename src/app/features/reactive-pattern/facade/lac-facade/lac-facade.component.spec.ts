import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacFacadeComponent } from './lac-facade.component';

describe('LacFacadeComponent', () => {
  let component: LacFacadeComponent;
  let fixture: ComponentFixture<LacFacadeComponent>;

  beforeEach(async(() => {
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
