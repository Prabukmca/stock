import { Injectable } from "@angular/core";
import { CommonFun, CommonLogics, LayerMethods } from "../models/lac-model";
import { LacFacade } from "./lac-facade";

@Injectable({
  providedIn: "root"
})
export class LayerFacade implements CommonFun, CommonLogics, LayerMethods {
  LayerMethodOne(): void {
    console.log("Lyr meth one called");
  }
  findFirst(marks: number[]): number {
    throw new Error("Method not implemented.");
  }
  average(a: number, b: number, c: number): number {
    throw new Error("Method not implemented.");
  }
  sum(a: number, b: number): number {
    return a + b + 5;
  }
  constructor(private lacFacade: LacFacade) {}
}
