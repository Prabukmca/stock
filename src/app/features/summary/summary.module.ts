import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryContainerComponent } from './containers/summary-container/summary-container.component';
import { SummaryInletComponent } from './containers/summary-inlet/summary-inlet.component';
import { SummaryComponent } from './components/summary/summary.component';


@NgModule({
  declarations: [SummaryContainerComponent, SummaryInletComponent, SummaryComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
