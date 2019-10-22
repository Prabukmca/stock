import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Layer } from '../models/layer.model';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class LayerService {
  private baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  getLayers(): Observable<Layer[]> {
    return this.httpClient
      .get<Layer[]>(`${this.baseUrl}/layers`)
      .pipe(tap(data => console.log(JSON.stringify(data))));
  }

  getLayerById(id: number): Observable<Layer> {
    return this.httpClient
      .get<Layer>(`${this.baseUrl}/layers/${id}`)
      .pipe(tap(data => console.log(JSON.stringify(data))));
  }

  addLayer(layer: Layer): Observable<Layer> {
    let body = JSON.stringify(layer);
    return this.httpClient.post<Layer>(
      `${this.baseUrl}/layers`,
      body,
      httpOptions
    );
  }

  deleteLayer(layer: Layer): Observable<any> {
    return this.httpClient.delete<Layer>(`${this.baseUrl}/layers/${layer.id}`);
  }
}
