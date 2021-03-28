import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DataManagerComponent } from "./data-manager.component";
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DataManagerService } from "../services/data-manager.service";
import { of } from "rxjs";

describe("DataMaDataManagerComponentnager Shallow Test", () => {
  let fixture: ComponentFixture<DataManagerComponent>;
  let mockDataManagerService;
  let dataTypes = [
    { id: 1, name: "tesst1" },
    { id: 2, name: "tesst2" },
    { id: 3, name: "tesst3" }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataManagerComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: DataManagerService, userValue: mockDataManagerService }
      ]
    });
    fixture = TestBed.createComponent(DataManagerComponent);
  });

  it("Should tabs should get fill by service", () => {
    mockDataManagerService = jasmine.createSpyObj(['getDataTypeValues']);
    debugger;
    console.log(mockDataManagerService);
    mockDataManagerService.getDataTypeValues.and.returnValue(of(dataTypes));
    let com = new DataManagerComponent(mockDataManagerService);
    debugger
    fixture.detectChanges();
    debugger
    expect(fixture.componentInstance.tabs.length).toBe(3);
    debugger
  });
});
