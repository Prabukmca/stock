import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { DataTypes } from "../models/DataTypes";

@Injectable({
  providedIn: "root"
})
export class DataManagerService {
  private baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  getDataTypeValues(): Observable<DataTypes[]> {
    return this.httpClient
      .get<DataTypes[]>(`${this.baseUrl}/dataTypes`)
      .pipe(tap(data => console.log(JSON.stringify(data))));
  }
}
