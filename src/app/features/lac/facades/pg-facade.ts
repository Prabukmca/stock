import { Injectable } from "@angular/core";
import { PgMethods } from "../models/lac-model";

@Injectable({
  providedIn: "root"
})
export class PgFacade implements PgMethods {
  PgMethodOne(): void {
    console.log("pg method one called");
  }
}
