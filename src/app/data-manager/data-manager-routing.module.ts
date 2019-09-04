import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataManagerComponent } from "./data-manager/data-manager.component";
import { DataExplorerComponent } from "./data-explorer/data-explorer.component";

import { DataManagerDetailsComponent } from "./data-manager-details/data-manager-details.component";

const routes: Routes = [
  {
    path: "",
    component: DataManagerComponent,
    children: [
      {
        path: "",
        redirectTo: "dataexplorer",
        pathMatch: "full"
      },
      {
        path: "dataexplorer",
        component: DataExplorerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataManagerRoutingModule {
  static components = [
    DataManagerComponent,
    DataExplorerComponent,
    DataManagerDetailsComponent
  ];
}
