import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersContainerComponent } from './layers-container.component';

describe('LayersContainerComponent', () => {
  let component: LayersContainerComponent;
  let fixture: ComponentFixture<LayersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
