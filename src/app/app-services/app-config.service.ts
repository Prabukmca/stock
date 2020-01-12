import { Injectable } from "@angular/core";

@Injectable()
export class AppInitService {
  Init() {
    return new Promise<void>((resolve, reject) => {
        const BASE_URL = 'http://localhost:3000';
      console.log("App init service called");
      setTimeout(() => {
        console.log("App Init service finished");
        resolve();
      }, 6000);
    });
  }
}
