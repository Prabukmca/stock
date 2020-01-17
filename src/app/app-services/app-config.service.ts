import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class AppInitService {
  constructor(private http: HttpClient) {
    this.LoadConfig().subscribe(data => {
      console.log("data got it", data);
    });
  }
  LoadConfig(): Observable<any> {
    const path = "./assets/config.json";
    return this.http.get(path).pipe(
      map((res: any) => res),
      catchError(err => of(err))
    );
  }
  Init() {
    return new Promise<void>((resolve, reject) => {
      const BASE_URL = "http://localhost:3000";
      console.log("App init service called");
      setTimeout(() => {
        console.log("App Init service finished");
        resolve();
      }, 6000);
    });
  }
}
