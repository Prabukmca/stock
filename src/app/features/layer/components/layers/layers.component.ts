import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Layer } from "../../models/layer.model";

@Component({
  selector: "smc-layers",
  templateUrl: "./layers.component.html",
  styleUrls: ["./layers.component.scss"]
})
export class LayersComponent implements OnInit {
  @Input() layers: Layer[];

  @Output() eventHandled = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  add() {
    this.eventHandled.emit({ type: "ADD_LAYER", data: null });
  }

  delete($event) {
    this.eventHandled.emit({ type: "DELETE_LAYER", data: $event });
  }
}
