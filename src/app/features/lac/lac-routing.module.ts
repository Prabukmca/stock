import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LacLayerBlockComponent } from "./components/lac-layer-block/lac-layer-block.component";

const routes: Routes = [{ path: "", component: LacLayerBlockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LacRoutingModule {
  static components = [LacLayerBlockComponent];
}
