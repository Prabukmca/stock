import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "smc-removed-layers",
  templateUrl: "./removed-layers.component.html",
  styleUrls: ["./removed-layers.component.scss"]
})
export class RemovedLayersComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store
      .pipe(select("DELETED_LAYERS"))
      .subscribe(data => console.log("got deleted layers", data));
  }
}
