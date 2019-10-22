import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
// import { HotTableModule } from '@handsontable/angular';
import { HotTableModule } from 'ng2-handsontable';

import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { PortfolioComponent } from "./portfolio.component";
import { HttpClientModule } from "@angular/common/http";
import { PortfolioReducer } from "../features/state/portfolio.reducer";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { DataManagerModule } from '../features/data-manager/data-manager.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [PortfolioComponent, PortfolioRoutingModule.components],
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
    HotTableModule,
    NgbModule,
    TabsModule.forRoot()
  ],
  exports: [MatTabsModule, NgbModule],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule {}
