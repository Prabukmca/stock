import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacBodyComponent } from './lac-body.component';

describe('LacBodyComponent', () => {
  let component: LacBodyComponent;
  let fixture: ComponentFixture<LacBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
