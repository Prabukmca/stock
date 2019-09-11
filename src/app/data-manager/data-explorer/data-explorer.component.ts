import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { DialogService } from "../../portfolio/dialog.service";

@Component({
  selector: "smc-data-explorer",
  templateUrl: "./data-explorer.component.html",
  styleUrls: ["./data-explorer.component.scss"]
})
export class DataExplorerComponent implements OnInit {
  isNotSaved = false;
  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  onChange() {
    this.isNotSaved = true;
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (this.isNotSaved) {
      return this.dialogService.confirm("Discard changes?");
    }
    return true;
  }
}
