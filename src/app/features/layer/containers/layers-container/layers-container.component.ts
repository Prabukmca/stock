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
  deletedLayers$: Observable<Layer[]>;
  layer: Layer;
  searchLayerId: number;

  @Input() value: boolean;
  layers: Layer[];

  constructor(
    private store: Store<fromLayer.LayerState>,
    private layerService: LayerService
  ) {}

  ngOnInit() {
    this.store.dispatch(new LayerActions.Load());
    this.layers$ = this.store.pipe(select(fromLayer.getLayersState));

    this.deletedLayers$ = this.store.pipe(
      select(fromLayer.getDeletedLayersState)
    );
  }

  eventHandled($event) {
    if ($event.type === "ADD_LAYER") {
      const layer = {} as Layer;
      layer.name = "layer test";
      layer.type = "layer type";
      layer.description = "desc";

      this.store.dispatch(new LayerActions.AddLayerAction(layer));
    }
    if ($event.type === "DELETE_LAYER") {
      this.store.dispatch(new LayerActions.DeleteLayerAction($event.data));
    }
  }
}
