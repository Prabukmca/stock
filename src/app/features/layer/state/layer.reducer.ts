import { Layer } from "../models/layer.model";
import * as fromRoot from "../../../state/portfolio.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State extends fromRoot.State {
  layers: LayerState;
}

export interface LayerState {
  layers: Layer[];
  deletedLayers: Layer[];
}

const initialState: LayerState = {
  layers: [],
  deletedLayers: []
};

const getLayersFeatureState = createFeatureSelector<LayerState>("layerReducer");

export const getDeletedLayersState = createSelector(
  getLayersFeatureState,
  state => state.deletedLayers
);

export const getLayersState = createSelector(
  getLayersFeatureState,
  state => state.layers
);

export function layerReducer(state = initialState, action): LayerState {
  switch (action.type) {
    case "LayerData":
      return {
        ...state
      };

    case "DELETED_LAYERS":
      return {
        ...state,
        deletedLayers: [...state.deletedLayers, action.payload]
      };
  }
}
