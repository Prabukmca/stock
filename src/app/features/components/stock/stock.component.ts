import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../services/portfolio.service";
import { map } from "rxjs/operators";

@Component({
  selector: "smc-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.scss"],
})
export class StockComponent implements OnInit {
  isChildDeleted: boolean;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    console.log("stock init");
    const tax$ = this.portfolioService.getTaxSavings().pipe(
      map((data) => {
        data[1].title = "this too";
        return data;
      })
    );
    this.portfolioService
      .getTaxSavings()
      .subscribe((data) => console.log("Subscribed Tax", data));

    tax$.subscribe((tax) => console.log("tax changed", tax));
  }
}
