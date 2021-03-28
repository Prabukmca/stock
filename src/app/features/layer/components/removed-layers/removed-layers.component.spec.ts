import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RemovedLayersComponent } from './removed-layers.component';

describe('RemovedLayersComponent', () => {
  let component: RemovedLayersComponent;
  let fixture: ComponentFixture<RemovedLayersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovedLayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovedLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
