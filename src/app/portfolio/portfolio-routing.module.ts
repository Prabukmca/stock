import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StockComponent } from "./components/stock/stock.component";
import { EquityComponent } from "./components/equity/equity.component";
import { EquityLongTermComponent } from "./components/equity-long-term/equity-long-term.component";
import { EquityShortTermComponent } from "./components/equity-short-term/equity-short-term.component";
import { EquityTermsComponent } from "./components/equity-terms/equity-terms.component";
import { DragAndDropComponent } from "./components/drag-and-drop/drag-and-drop.component";
import { HottableDemoComponent } from "./components/hottable-demo/hottable-demo.component";

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
  },
  { path: "hottabledemo", component: HottableDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
  static components = [
    StockComponent,
    EquityComponent,
    EquityLongTermComponent,
    EquityShortTermComponent,
    EquityTermsComponent,
    DragAndDropComponent,
    HottableDemoComponent
  ];
}
