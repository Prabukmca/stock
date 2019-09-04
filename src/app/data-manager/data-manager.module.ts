import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material";

import { DataManagerRoutingModule } from "./data-manager-routing.module";

@NgModule({
  declarations: [DataManagerRoutingModule.components],
  imports: [CommonModule, DataManagerRoutingModule, MatTabsModule]
})
export class DataManagerModule {}
