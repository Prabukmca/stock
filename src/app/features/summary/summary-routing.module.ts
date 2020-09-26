import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SummaryInletComponent } from "./containers/summary-inlet/summary-inlet.component";
import { SummaryContainerComponent } from "./containers/summary-container/summary-container.component";
import { CanActivateProgramGuard } from "src/app/guards/can-activate-program.guard";

const routes: Routes = [
  {
    path: "",
    component: SummaryInletComponent,
    children: [
      {
        path: "summary",
        component: SummaryContainerComponent,
        canActivate: [CanActivateProgramGuard],
      },
      {
        path: "summary/:id",
        component: SummaryContainerComponent,
        canActivate: [CanActivateProgramGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryRoutingModule {}
