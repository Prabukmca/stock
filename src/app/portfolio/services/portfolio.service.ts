import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { HottableModel } from '../models/hottable.model';

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  getHotTable(): Observable<HottableModel[]> {
    return this.httpClient
      .get<HottableModel[]>(`${this.baseUrl}/dataObject`)
      .pipe(tap(data => console.log(JSON.stringify(data))));
  }
}
