import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LayerRoutingModule } from "./layer-routing.module";
import { StoreModule } from "@ngrx/store";
import { layerReducer } from "./state/layer.reducer";
import { LayersContainerComponent } from "./components/layers-container/layers-container.component";
import { RemovedLayersComponent } from "./components/removed-layers/removed-layers.component";

@NgModule({
  declarations: [LayersContainerComponent, RemovedLayersComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayerRoutingModule,
    NgbModule,
    StoreModule.forFeature("layerReducer", layerReducer)
  ]
})
export class LayerModule {}
