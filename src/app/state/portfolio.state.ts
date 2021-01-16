import { createFeatureSelector } from '@ngrx/store';

export interface LayerState {
    layers: Layer[]
}
export interface State {
    users: any;
    layers: LayerState
}

export const layersState = createFeatureSelector<State, LayerState>(
    'layers'
);

export interface Layer {
    id: number;
    name: string;
    type: string;
    description: string;
}


