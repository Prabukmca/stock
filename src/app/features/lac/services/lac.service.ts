import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";



@Injectable({
  providedIn: "root"
})
export class LacService {
  private baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {
    
  }

  getTypeLoads(): Observable<any[]> {
    
    return this.httpClient
      .get<[]>(`${this.baseUrl}/typeLoads`)
      .pipe(tap(data => console.log("in service data ", JSON.stringify(data))));
  }
}
