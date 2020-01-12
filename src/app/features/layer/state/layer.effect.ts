import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { LayerService } from "../services/layer.service";
import * as layerActions from "../state/layer.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Layer } from "../models/layer.model";
import { of } from "rxjs";
@Injectable()
export class LayerEffects {
  constructor(private actions$: Actions, private layerService: LayerService) {}

  @Effect()
  loadLayers$ = this.actions$.pipe(
    ofType(layerActions.LayerActionTypes.Load),
    mergeMap(
      (action: layerActions.Load) =>
        this.layerService
          .getLayers()
          .pipe(map((layers: Layer[]) => new layerActions.LoadSuccess(layers))),
      // catchError(err => of(new layerActions.LoadFail(err)))
    )
  );
}
