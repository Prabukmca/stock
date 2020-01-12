import { Action } from "@ngrx/store";
import { Layer } from "../models/layer.model";

export enum LayerActionTypes {
  GetLayers = "[Layer] Get",
  AddLayer = "[Layer] Add ",
  DeleteLayer = "[Layer] Delete",
  Load = "[Layer] Load",
  LoadSuccess = "[Layer] Load Success",
  LoadFail = "[Layer] Load Fail "
}

export class AddLayerAction implements Action {
  readonly type = LayerActionTypes.AddLayer;

  constructor(public payload: Layer) {}
}

export class DeleteLayerAction implements Action {
  readonly type = LayerActionTypes.DeleteLayer;

  constructor(public payload: Layer) {}
}

export class Load implements Action {
  readonly type = LayerActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = LayerActionTypes.LoadSuccess;
  constructor(public payload: Layer[]) {}
}

export class LoadFail implements Action {
  readonly type = LayerActionTypes.LoadFail;
  constructor(public payload: string) {}
}

export type LayerActions =
  | AddLayerAction
  | DeleteLayerAction
  | Load
  | LoadSuccess
  | LoadFail;
