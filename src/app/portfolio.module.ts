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
import { HttpClientModule, HttpClient } from "@angular/common/http";
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
import { initializeApp, initializeSecurity } from "./app-services/app-config.service";
import { AutocompleteFilterComponent } from "./shared/components/autocomplete-filter/autocomplete-filter.component";
import { HottableDemoComponent } from "./features/components/hottable-demo/hottable-demo.component";
import { AdDirective } from "./shared/directives/AdDirective/ad-directive.directive";
import { GraphQLModule } from './graphql.module';
import { SideNavBarComponent } from './portfolio/components/side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioRoutingModule.components,
    AdDirective,
    SideNavBarComponent,
  ],
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
    StoreDevtoolsModule.instrument({
      name: "stock dev tools",
      maxAge: 25,
      logOnly: environment.production,
    }),
    GraphQLModule,
  ],
  exports: [MatTabsModule, NgbModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [HttpClient],
      multi: true,
    },
    {
      provide: "Stock_Security_Service",
      useFactory: initializeSecurity,
    },
  ],
  bootstrap: [PortfolioComponent],
})
export class PortfolioModule {}
