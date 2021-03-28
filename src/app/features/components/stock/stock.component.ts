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
  constructor(private portfolioService: PortfolioService) { }

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
    
    this.test4().then(data=>{});
    this.test5();
    this.test1();
    this.test2();
    this.test3();

  }
  async test1() {
    await this.update(10000);
  }
  async test2() {
    await this.update(20000);
  }
  async test3() {
    await this.update(30000);
  }
  async test4() {
    await this.update(40000);
  }
  async test5() {
    await this.update(50000);
  }
  async update(from: number) {
    // setTimeout(() => {
    //   console.log(from);
    // }, from);
    console.log(from);

  }
}
