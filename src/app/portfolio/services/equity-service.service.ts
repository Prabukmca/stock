import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";

@Injectable({
  providedIn: "root"
})
export class EquityServiceService {
  private equityLognTermDeleted = new Subject<boolean>();
  isEquityLognTermDeleted$ = this.equityLognTermDeleted.asObservable();

  constructor() {}

  eqityLongTermDeleteDetected(isDeleted: boolean): void {
    this.equityLognTermDeleted.next(isDeleted);
  }
}
