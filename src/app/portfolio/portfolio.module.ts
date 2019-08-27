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


@NgModule({
  declarations: [StockComponent, EquityComponent, EquityLongTermComponent, EquityShortTermComponent, PortfolioComponent, EquityTermsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PortfolioRoutingModule,
  ],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
