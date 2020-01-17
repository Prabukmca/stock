import { Injectable } from "@angular/core";
import {
  CommonFun,
  PgMethods,
  LayerMethods,
  applyMixins
} from "../models/lac-model";
import { PgFacade } from "./pg-facade";
import { LayerFacade } from "./layer-facade";

@Injectable({
  providedIn: "root"
})
export class LacFacade implements CommonFun, PgMethods, LayerMethods {
  LayerMethodOne(): void {
    console.log("layr one called in lacfacade");
  }

  PgMethodOne(): void {
    console.log("pgmethod one called in lacfacade");
  }

  sum(a: number, b: number): number {
    return a + b;
  }
  divide(a: number, b: number): number {
    return a / b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
}
applyMixins(LacFacade, [PgFacade, LayerFacade]);
