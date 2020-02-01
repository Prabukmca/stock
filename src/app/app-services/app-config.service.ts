import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AppData } from "./app-init-data";

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
}

export function initializeApp() {
  const path = "./assets/config.json";
  const result = {} as AppData;
  return new Promise<void>((resolve, reject) => {
    return this.http.get(path).then(data => (result.config = data));
  });
}

// export function initializeApp() {
// const path = "./assets/config.json";
// return new Promise<void>((resolve, reject) => {
//   return this.http.get(path).pipe(
//     map((res: any) => <AppData>res),
//     catchError(err => of(err))
//   );
// });
// }
