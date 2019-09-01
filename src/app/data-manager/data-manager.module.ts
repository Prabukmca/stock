import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataManagerRoutingModule } from './data-manager-routing.module';
import { DataExplorerComponent } from './data-explorer/data-explorer.component';
import { DataManagerDetailsComponent } from './data-manager-details/data-manager-details.component';
import { DataManagerComponent } from './data-manager/data-manager.component';


@NgModule({
  declarations: [DataExplorerComponent, DataManagerDetailsComponent, DataManagerComponent],
  imports: [
    CommonModule,
    DataManagerRoutingModule
  ]
})
export class DataManagerModule { }
