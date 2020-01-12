import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayersContainerComponent } from './containers/layers-container/layers-container.component';
import { RemovedLayersComponent } from './components/removed-layers/removed-layers.component';
import { LayersComponent } from './components/layers/layers.component';



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
    RemovedLayersComponent,
    LayersComponent,
  ]
 }
