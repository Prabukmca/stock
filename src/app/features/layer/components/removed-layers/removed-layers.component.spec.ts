import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedLayersComponent } from './removed-layers.component';

describe('RemovedLayersComponent', () => {
  let component: RemovedLayersComponent;
  let fixture: ComponentFixture<RemovedLayersComponent>;

  beforeEach(async(() => {
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
