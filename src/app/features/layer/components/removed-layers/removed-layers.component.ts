import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs/Rx';
import { Layer } from 'src/app/state/portfolio.state';

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
  restore(layer : any){

  }
}
