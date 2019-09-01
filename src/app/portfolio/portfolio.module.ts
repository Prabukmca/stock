import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { StockComponent } from './components/stock/stock.component';
import { EquityComponent } from './components/equity/equity.component';
import { EquityLongTermComponent } from './components/equity-long-term/equity-long-term.component';
import { EquityShortTermComponent } from './components/equity-short-term/equity-short-term.component';
import { PortfolioComponent } from './portfolio.component';
import { EquityTermsComponent } from './components/equity-terms/equity-terms.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { DataManagerModule } from '../data-manager/data-manager.module';


@NgModule({
  declarations: [StockComponent, EquityComponent, EquityLongTermComponent, EquityShortTermComponent, PortfolioComponent, EquityTermsComponent, DragAndDropComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PortfolioRoutingModule,
    DataManagerModule,
  ],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
