import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { PortfolioModule } from './app/portfolio.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PortfolioModule)
  .catch(err => console.error(err));
