import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
// import { HotTableModule } from '@handsontable/angular';
import { HotTableModule } from "ng2-handsontable";

import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { HttpClientModule } from "@angular/common/http";
import { PortfolioReducer } from "./state/portfolio.reducer";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { DataManagerModule } from "./features/data-manager/data-manager.module";
import { TabsModule } from "ngx-bootstrap/tabs";
import { LayerModule } from "./features/layer/layer.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";

import { LacModule } from "./features/lac/lac.module";

import { EffectsModule } from "@ngrx/effects";
import {
  AppInitService,
  initializeApp
} from "./app-services/app-config.service";
import { AutocompleteFilterComponent } from "./shared/components/autocomplete-filter/autocomplete-filter.component";
import { HottableDemoComponent } from "./features/components/hottable-demo/hottable-demo.component";
import { AdDirective } from './shared/directives/AdDirective/ad-directive.directive';

@NgModule({
  declarations: [PortfolioComponent, PortfolioRoutingModule.components, AdDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    PortfolioRoutingModule,
    DataManagerModule,
    MatTabsModule,
    HttpClientModule,
    StoreModule.forRoot({ PortfolioReducer }),
    EffectsModule.forRoot([]),
    HotTableModule,
    NgbModule,
    TabsModule.forRoot(),
    LayerModule,
    LacModule,
    StoreDevtoolsModule.instrument({
      name: "stock dev tools",
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  exports: [MatTabsModule, NgbModule],
  // providers: [
  //   AppInitService,
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: initializeApp,
  //     deps: [AppInitService],
  //     multi: true
  //   }
  // ],
  entryComponents: [HottableDemoComponent],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule {}
