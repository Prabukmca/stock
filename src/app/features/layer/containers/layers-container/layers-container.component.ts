import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Layer } from "../../models/layer.model";
import { LayerService } from "../../services/layer.service";
import * as fromLayer from "../../state/layer.reducer";
import * as LayerActions from "../../state/layer.actions";
import { Observable } from "rxjs";

@Component({
  selector: "smc-layers-container",
  templateUrl: "./layers-container.component.html",
  styleUrls: ["./layers-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayersContainerComponent implements OnInit {
  title = "Default title";
  layers$: Observable<Layer[]>;
  layer: Layer;
  searchLayerId: number;
  deletedLayers: Layer[] = [];

  @Input() value: boolean;
  layers: Layer[];

  constructor(
    private store: Store<fromLayer.LayerState>,
    private layerService: LayerService
  ) {}

  ngOnInit() {
    this.store.dispatch(new LayerActions.Load());
    this.store
      .pipe(select(fromLayer.getLayersState))
      .subscribe( data => console.log('got data? ', data)
      )
  }
  getLayers() {
    // this.layerService.getLayers().subscribe(data => {
    //   this.layers = data;
    // });
  }
  // getLayer() {
  //   this.layerService.getLayerById(this.searchLayerId).subscribe(data => {
  //     this.layer = data;
  //   });
  // }
  // add() {
  //   const layer = {
  //     id: 0,
  //     name: "layer4",
  //     type: "layer4 type",
  //     description: "layer4 description"
  //   };

  //   this.layerService.addLayer(layer).subscribe(data => {
  //     this.layers.push(data);
  //   });
  // }
  // delete(layer: Layer) {
  //   this.store.dispatch(new LayerActions.DeleteLayerAction(layer));

  //   this.layerService.deleteLayer(layer).subscribe(data => {
  //     this.layers.splice(this.layers.indexOf(layer), 1);
  //   });
  // }
}
