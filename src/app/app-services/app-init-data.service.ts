import { AppInitService } from './app-config.service';

export function initializeApp(appInitService: AppInitService) {
    return (): Promise<any> => {
      return appInitService.Init();
    };
  }