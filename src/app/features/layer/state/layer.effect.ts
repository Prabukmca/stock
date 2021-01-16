import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { LayerService } from "../services/layer.service";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { Store } from '@ngrx/store';
import { loadLayer, loadLayerFailure, loadLayerSuccess } from './layer.actions';
import { layersState, LayerState } from 'src/app/state/portfolio.state';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { of } from 'rxjs/internal/observable/of';
@Injectable()
export class LayerEffects {
  constructor(
    private actions$: Actions,
    private layerService: LayerService) { }

  loadLayers = createEffect(() => this.actions$.pipe(ofType(loadLayer),
    tap(() => {
      this.layerService.getLayers().pipe(map(layers => loadLayerSuccess({ layers })),
        catchError(error => of(loadLayerFailure({ error }))))
    }))
    , { dispatch: false });
}
