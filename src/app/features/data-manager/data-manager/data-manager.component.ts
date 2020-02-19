import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { DataManagerService } from "../services/data-manager.service";

@Component({
  selector: "smc-data-manager",
  templateUrl: "./data-manager.component.html",
  styleUrls: ["./data-manager.component.scss"],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DataManagerComponent implements OnInit {
  tabs = [];
  dataType = "Test Type";
  constructor(
    // private store: Store<any>,
    private dataManagerService: DataManagerService
  ) {}

  ngOnInit() {
    this.dataManagerService.getDataTypeValues().subscribe(data => {
      this.tabs = data;
      this.keepItInStore("ADD_TAB", data);
      // this.store.pipe(select("dataManagers")).subscribe(dataManagers => {
      //   if (dataManagers) {
      //     this.tabs = [...this.tabs, dataManagers.tab];
      //   }
      // });
    });
  }

  ngAfterViewInit(): void {}
  trackByTab($event) {
    if ($event) {
      return $event.id;
    }
  }
  onAddNewTab() {
    // this.tabs.push({ id: 4, name: "tab4" });
    const data = { id: 5, name: "tab5" };
    this.keepItInStore("ADD_TAB", data);
  }

  private keepItInStore(action: string, data: any) {
    // this.store.dispatch({
    //   type: action,
    //   payload: data
    // });
  }
}
