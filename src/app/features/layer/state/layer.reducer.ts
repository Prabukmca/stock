import { Layer } from "../models/layer.model";
import * as fromRoot from "../../../state/portfolio.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LayerActionTypes, LayerActions } from "./layer.actions";

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

const getLayersFeatureState = createFeatureSelector<LayerState>("layerReducer");

export const getDeletedLayersState = createSelector(
  getLayersFeatureState,
  state => (state ? state.deletedLayers : state)
);

export const getLayersState = createSelector(getLayersFeatureState, state => {
  state => (state ? state.layers : state);
});

export const getError = createSelector(getLayersFeatureState, state =>
  state ? state.error : state
);

export function layerReducer(
  state = initialState,
  action: LayerActions
): LayerState {
  switch (action.type) {
    case LayerActionTypes.AddLayer:
      return {
        ...state,
        layers: [...state.layers, action.payload]
      };

    case LayerActionTypes.DeleteLayer:
      return {
        ...state,
        deletedLayers: [...state.deletedLayers, action.payload]
      };

    case LayerActionTypes.Load:
      return {
        ...state
      };

    case LayerActionTypes.LoadSuccess:
      return {
        ...state,
        layers: action.payload
      };

    case LayerActionTypes.LoadFail: {
      return {
        ...state,
        layers: [],
        error: action.payload
      };
    }
    default:
      return state;
  }
}
