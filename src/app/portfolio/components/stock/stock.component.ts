import { Component, OnInit } from "@angular/core";
import { EquityServiceService } from "../../services/equity-service.service";

@Component({
  selector: "smc-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.scss"]
})
export class StockComponent implements OnInit {
  isChildDeleted: boolean;
  constructor(private eqityService: EquityServiceService) {}

  ngOnInit() {
    this.eqityService.isEquityLognTermDeleted$.subscribe(
      deleted => (this.isChildDeleted = deleted)
    );
  }
}
