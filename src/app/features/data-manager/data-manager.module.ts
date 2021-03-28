import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

import { DataManagerRoutingModule } from "./data-manager-routing.module";
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/dataManager.reducer';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DynamicComponentOneComponent } from './components/dynamic-component-one/dynamic-component-one.component';
import { DynamicComponentTwoComponent } from './components/dynamic-component-two/dynamic-component-two.component';
import { DynamicComponentThreeComponent } from './components/dynamic-component-three/dynamic-component-three.component';


@NgModule({
  declarations: [DataManagerRoutingModule.components, DynamicComponentOneComponent, DynamicComponentTwoComponent, DynamicComponentThreeComponent],
  imports: [CommonModule, DataManagerRoutingModule, MatTabsModule, FormsModule,
    StoreModule.forFeature('dataManagers',reducer), TabsModule.forRoot()],
})
export class DataManagerModule {}
