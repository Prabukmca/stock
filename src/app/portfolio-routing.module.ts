import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StockComponent } from "./features/components/stock/stock.component";
import { HottableDemoComponent } from "./features/components/hottable-demo/hottable-demo.component";

const routes: Routes = [
  { path: "", redirectTo: "/blogs", pathMatch: "full" },
  { path: "blogs", loadChildren: () => import('./features/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: "stock", component: StockComponent },
  {
    path: "datamanager",
    loadChildren: () =>
      import("./features/data-manager/data-manager.module").then(
        (d) => d.DataManagerModule
      ),
  },
  { path: "hottabledemo", component: HottableDemoComponent },
  {
    path: "layers",
    loadChildren: () =>
      import("./features/layer/layer.module").then((l) => l.LayerModule),
  },
  {
    path: "lac",
    loadChildren: () =>
      import("./features/lac/lac.module").then((l) => l.LacModule),
  },
  {
    path: "reactivepattern",
    loadChildren: () =>
      import("./features/reactive-pattern/reactive-pattern.module").then(
        (r) => r.ReactivePatternModule
      ),
  },
  {
    path: "ps",
    loadChildren: () =>
      import("./features/summary/summary.module").then((l) => l.SummaryModule),
  },
  // {
  //   path: "ps",
  //   loadChildren: () =>
  //     import("./features/summary/summary.module").then((l) => l.SummaryModule),
  // },
  {
    path: "auth",
    loadChildren: () =>
      import("./features/auth/auth.module").then((a) => a.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {
  static components = [
    StockComponent,
    HottableDemoComponent,
  ];
}
