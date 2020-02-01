import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LayerRoutingModule } from "./layer-routing.module";
import { StoreModule } from "@ngrx/store";
import { layerReducer } from "./state/layer.reducer";

import { RemovedLayersComponent } from "./components/removed-layers/removed-layers.component";
import { LayersComponent } from "./components/layers/layers.component";
import { EffectsModule } from '@ngrx/effects';
import { LayerEffects } from './state/layer.effect';

@NgModule({
  declarations: [LayerRoutingModule.components],
  imports: [
    CommonModule,
    FormsModule,
    LayerRoutingModule,
    NgbModule,
    StoreModule.forFeature("layerReducer", layerReducer),
    EffectsModule.forFeature([LayerEffects]),
  ]
})
export class LayerModule {
  
}
