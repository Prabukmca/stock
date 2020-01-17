import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

import { LacRoutingModule } from "./lac-routing.module";
import { LacLayerBlockComponent } from "./components/lac-layer-block/lac-layer-block.component";
import { LacFacade } from "./facades/lac-facade";
import { LayerFacade } from "./facades/layer-facade";

@NgModule({
  declarations: [LacRoutingModule.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LacRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  
})
export class LacModule {}
