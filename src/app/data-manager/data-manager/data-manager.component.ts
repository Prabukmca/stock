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
   
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
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
}
