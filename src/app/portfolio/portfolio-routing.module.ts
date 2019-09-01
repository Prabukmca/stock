import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StockComponent } from "./components/stock/stock.component";
import { DragAndDropComponent } from "./components/drag-and-drop/drag-and-drop.component";

const routes: Routes = [
  { path: "", redirectTo: "/stock", pathMatch: "full" },
  { path: "stock", component: StockComponent },
  { path: "draganddrop", component: DragAndDropComponent },
  {
    path: "datamanager",
    loadChildren: () =>
      import("./../data-manager/data-manager.module").then(
        d => d.DataManagerModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
