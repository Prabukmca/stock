import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacComponent } from './lac.component';

describe('LacComponent', () => {
  let component: LacComponent;
  let fixture: ComponentFixture<LacComponent>;

  beforeEach(async(() => {
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
