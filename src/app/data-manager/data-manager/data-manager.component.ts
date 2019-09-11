import { Component, OnInit } from "@angular/core";

@Component({
  selector: "smc-data-manager",
  templateUrl: "./data-manager.component.html",
  styleUrls: ["./data-manager.component.scss"]
})
export class DataManagerComponent implements OnInit {
  tabs = [];

  constructor() {}

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
  }

  ngAfterViewInit(): void {}
  trackByTab($event) {
    if ($event) {
      return $event.id;
    }
  }
  onAddNewTab() {
    this.tabs.push({ id: 4, name: "tab4" });
  }
}
