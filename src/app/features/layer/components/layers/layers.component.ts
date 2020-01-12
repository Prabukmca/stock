import { Component, OnInit, Input } from "@angular/core";
import { Layer } from "../../models/layer.model";

@Component({
  selector: "smc-layers",
  templateUrl: "./layers.component.html",
  styleUrls: ["./layers.component.scss"]
})
export class LayersComponent implements OnInit {
  @Input() layers: Layer[];

  constructor() {}

  ngOnInit() {}
}
