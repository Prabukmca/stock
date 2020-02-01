import { Injectable } from "@angular/core";
import {
  CommonFun,
  PgMethods,
  LayerMethods,
  applyMixins,
  Buyer
} from "../models/lac-model";
import { PgFacade } from "./pg-facade";
import { LayerFacade } from "./layer-facade";

@Injectable({
  providedIn: "root"
})
export class LacFacade implements CommonFun, PgMethods, LayerMethods {
  LayerMethodOne: () => void;

  PgMethodOne: () => void;

  sum(a: number, b: number): number {
    return a + b;
  }
  divide(a: number, b: number): number {
    return a / b;
  }
  multiply(a: number, b: number): number {
    return a * b;
    const buyer = new Buyer();
  }

  
}
applyMixins(LacFacade, [PgFacade, LayerFacade]);
