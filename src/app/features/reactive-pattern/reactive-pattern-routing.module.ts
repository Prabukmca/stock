import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserEventsExperimentsComponent } from './components/browser-events-experiments/browser-events-experiments.component';


const routes: Routes = [
  {
    path:'',
    component:BrowserEventsExperimentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactivePatternRoutingModule { }
