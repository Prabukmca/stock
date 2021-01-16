import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { LayerService } from "../../services/layer.service";
import * as fromLayer from "../../state/layer.reducer";
import * as LayerActions from "../../state/layer.actions";
import { Observable } from "rxjs";
import { Layer, State } from 'src/app/state/portfolio.state';
import { selectLayers } from '../../state/layer.selector';

@Component({
  selector: "smc-layers-container",
  templateUrl: "./layers-container.component.html",
  styleUrls: ["./layers-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayersContainerComponent implements OnInit {
  title = "Default title";
  searchLayerId: number;
  layers$ = this.store.pipe(select(selectLayers));

  constructor(
    private store: Store<State>,
    private service: LayerService
  ) { }

  ngOnInit() {
    this.store.dispatch(LayerActions.loadLayer());
    this.layers$.subscribe(data => {
      console.log('layers data', data);
    });
    // this.service.getLayers().subscribe(data => {
    //   console.log('test get layers', data);

    // })
  }

  eventHandled($event) {
    if ($event.type === "ADD_LAYER") {
      const layer = {} as Layer;
      layer.name = "layer test";
      layer.type = "layer type";
      layer.description = "desc";

    }
    if ($event.type === "DELETE_LAYER") {
    }
  }
}
