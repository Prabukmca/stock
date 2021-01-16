import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AppData, AppConfig } from "./app-init-data";

// @Injectable()
// export class AppInitService {
//   constructor(private http: HttpClient) {
//     this.LoadConfig().subscribe((data) => {
//       console.log("data got it", data);
//     });
//   }
//   LoadConfig(): Observable<any> {
//     const path = "./assets/config.json";
//     return this.http.get(path).pipe(
//       map((res: any) => res),
//       catchError((err) => of(err))
//     );
//   }
// }

//#region Public Methods

export function initializeApp(http: HttpClient) {
  // return () => {};
  return () => {
    const path = "./assets/config.json";
    return new Promise<void>((resolve, reject) => {
      http
        .get(path)
        .toPromise()
        .then((data: AppConfig) => {
          AppData.config = <AppConfig>data;
          resolve();
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };
}

export function initializeSecurity(){
  return {
    getUserDataApi: '/api/login'
  }
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

//#endregion