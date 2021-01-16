import { Action, createAction, props } from "@ngrx/store";
import { Layer } from 'src/app/state/portfolio.state';

export const loadLayer = createAction('[Layer] LoadLayer');
export const loadLayerSuccess = createAction('[Layer] Load Layer Success', props<{ layers: Layer[] }>());
export const loadLayerFailure = createAction('[Layer] Load Layer Failure', props<{ error: any }>());

