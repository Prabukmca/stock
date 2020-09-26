import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { HottableModel, GridModel } from "../models/hottable.model";
import { AppData } from "src/app/app-services/app-init-data";

@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  private baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  getHotTable(): Observable<HottableModel[]> {
    return this.httpClient
      .get<HottableModel[]>(`${this.baseUrl}/dataObject`)
      .pipe(tap((data) => console.log(JSON.stringify(data))));
  }
  getTaxSavings(): Observable<GridModel[]> {
    console.log("app data", AppData.config);

    return this.httpClient
      .get<GridModel[]>(`${this.baseUrl}/TaxSavings`)
      .pipe(map(data => {
        data[0].title="updated";
        return data;
      }));
  }
}
