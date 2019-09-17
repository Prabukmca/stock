import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

import { DataManagerRoutingModule } from "./data-manager-routing.module";
import { StoreModule } from '@ngrx/store';
import { reducer } from './data-manager/state/dataManager.reducer';

@NgModule({
  declarations: [DataManagerRoutingModule.components],
  imports: [CommonModule, DataManagerRoutingModule, MatTabsModule, FormsModule,
    StoreModule.forFeature('dataManagers',reducer)]
})
export class DataManagerModule {}
