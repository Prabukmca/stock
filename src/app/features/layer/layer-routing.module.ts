import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayersContainerComponent } from './components/layers-container/layers-container.component';
import { RemovedLayersComponent } from './components/removed-layers/removed-layers.component';


const routes: Routes = [
  {
    path:"",
    component:LayersContainerComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayerRoutingModule {
  static components = [
    LayersContainerComponent,
    RemovedLayersComponent
  ]
 }
