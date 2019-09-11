import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

import { DataManagerRoutingModule } from "./data-manager-routing.module";

@NgModule({
  declarations: [DataManagerRoutingModule.components],
  imports: [CommonModule, DataManagerRoutingModule, MatTabsModule, FormsModule]
})
export class DataManagerModule {}
