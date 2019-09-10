import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material";
import { HotTableModule } from "@handsontable/angular";

import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { PortfolioComponent } from "./portfolio.component";
import { DataManagerModule } from "../data-manager/data-manager.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PortfolioComponent, PortfolioRoutingModule.components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    PortfolioRoutingModule,
    DataManagerModule,
    MatTabsModule,
    HotTableModule,
    HttpClientModule
  ],
  exports: [MatTabsModule],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule {}
