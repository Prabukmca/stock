import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

import { DataManagerRoutingModule } from "./data-manager-routing.module";
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/dataManager.reducer';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [DataManagerRoutingModule.components],
  imports: [CommonModule, DataManagerRoutingModule, MatTabsModule, FormsModule,
    StoreModule.forFeature('dataManagers',reducer), TabsModule.forRoot()]
})
export class DataManagerModule {}
