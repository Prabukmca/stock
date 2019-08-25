import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { PortfolioModule } from './app/portfolio/portfolio.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PortfolioModule)
  .catch(err => console.error(err));
