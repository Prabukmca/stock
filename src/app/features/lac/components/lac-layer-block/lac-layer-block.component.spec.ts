import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LacLayerBlockComponent } from './lac-layer-block.component';

describe('LacLayerBlockComponent', () => {
  let component: LacLayerBlockComponent;
  let fixture: ComponentFixture<LacLayerBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LacLayerBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacLayerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
