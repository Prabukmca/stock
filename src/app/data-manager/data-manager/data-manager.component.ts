import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "smc-data-manager",
  templateUrl: "./data-manager.component.html",
  styleUrls: ["./data-manager.component.scss"]
})
export class DataManagerComponent implements OnInit {
  tabs = [];

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.tabs = [
      {
        id: 1,
        name: "tap1"
      },
      {
        id: 1,
        name: "tap2"
      },
      {
        id: 1,
        name: "tap3"
      }
    ];

    this.store.pipe(select("dataManagers")).subscribe(dataManagers => {
      if (dataManagers) {
        this.tabs.push(dataManagers.tab);
      }
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
    this.store.dispatch({
      type: "ADD_TAB",
      payload: { id: 5, name: "tab5" }
    });
  }
}
