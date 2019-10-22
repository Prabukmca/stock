import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StockComponent } from '../features/components/stock/stock.component';
import { DragAndDropComponent } from '../features/components/drag-and-drop/drag-and-drop.component';
import { HottableDemoComponent } from '../features/components/hottable-demo/hottable-demo.component';
import { EquityComponent } from '../features/components/equity/equity.component';
import { EquityLongTermComponent } from '../features/components/equity-long-term/equity-long-term.component';
import { EquityShortTermComponent } from '../features/components/equity-short-term/equity-short-term.component';
import { EquityTermsComponent } from '../features/components/equity-terms/equity-terms.component';



const routes: Routes = [
  { path: "", redirectTo: "/stock", pathMatch: "full" },
  { path: "stock", component: StockComponent },
  { path: "draganddrop", component: DragAndDropComponent },
  {
    path: "datamanager",
    loadChildren: () =>
      import("../features/data-manager/data-manager.module").then(
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
