import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DataExplorerComponent } from "./data-explorer.component";

describe("firt unit test", () => {
  let sut: any;

  beforeEach(() => {
    sut = {};
  });

  xit("should be true if true", () => {
    sut.a = false;
    sut.a = true;
    expect(sut.a).toBe(true);
  });
});

describe("DataExplorerComponent", () => {
  let component: DataExplorerComponent;
  let fixture: ComponentFixture<DataExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataExplorerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit("should create", () => {
    expect(component).toBeTruthy();
  });
});
