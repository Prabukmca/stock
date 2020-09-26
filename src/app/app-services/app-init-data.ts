
// export function initializeApp(appInitService: AppInitService) {
//     return (): Promise<any> => {
//       return appInitService.Init();
//     };
//   }

export class AppData {
  static config: AppConfig;
}

export interface AppConfig {
  app: {
    baseUrl: string;
    version: number;
    releaseDate: Date;
    title: string;
    subTitle: string;
    name : string,
  };
  env: {
    name: string;
    userPhotoPathPattern: string;
  };
  security: { serviceUrl: string };
  commonServer: { serviceUrl: string };
  coreServer: { serviceUrl: string };
  logging: {};
}
