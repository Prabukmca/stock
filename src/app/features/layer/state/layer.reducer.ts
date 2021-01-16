import * as fromRoot from "../../../state/portfolio.state";
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { loadLayer } from "./layer.actions";
import { state } from '@angular/animations';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Layer } from '../../../state/portfolio.state';

export interface State extends fromRoot.State {
  layers: LayerState;
}

export interface LayerState {
  layers: Layer[];
  deletedLayers: Layer[];
  error: string;
}

const initialState: LayerState = {
  layers: [],
  deletedLayers: [],
  error: ""
};
export function sortByLayerName(a: Layer, b: Layer): number {
  return a.name.localeCompare(b.name);
}

export const layerAdapter: EntityAdapter<Layer> = createEntityAdapter<Layer>({
  sortComparer: sortByLayerName
})
const reducer = createReducer(
  initialState,
  on(loadLayer, (state) => ({ ...state }))
)
export function layerReducer(state: LayerState | undefined, action: Action) {
  return reducer(state, action);
}
