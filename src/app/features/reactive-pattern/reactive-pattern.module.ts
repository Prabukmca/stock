import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivePatternRoutingModule } from './reactive-pattern-routing.module';
import { BrowserEventsExperimentsComponent } from './components/browser-events-experiments/browser-events-experiments.component';
import { LacContainerComponent } from './container/lac-container/lac-container.component';
import { LacBodyComponent } from './components/lac-body/lac-body.component';
import { LacFacadeComponent } from './facade/lac-facade/lac-facade.component';
import { LacComponent } from './services/lac/lac.component';


@NgModule({
  declarations: [BrowserEventsExperimentsComponent, LacContainerComponent, LacBodyComponent, LacFacadeComponent, LacComponent],
  imports: [
    CommonModule,
    ReactivePatternRoutingModule
  ]
})
export class ReactivePatternModule { }
