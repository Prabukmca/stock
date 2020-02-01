import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Layer } from '../../models/layer.model';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: "smc-removed-layers",
  templateUrl: "./removed-layers.component.html",
  styleUrls: ["./removed-layers.component.scss"]
})
export class RemovedLayersComponent implements OnInit {

  @Input() deletedLayers$ : Observable<Layer[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    
  }
}
