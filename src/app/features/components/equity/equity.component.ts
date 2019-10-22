import { Component, OnInit } from "@angular/core";
import { EquityServiceService } from "../../../features/services/equity-service.service";

@Component({
  selector: "smc-equity",
  templateUrl: "./equity.component.html",
  styleUrls: ["./equity.component.scss"]
})
export class EquityComponent implements OnInit {
  isChildDeleted: boolean;
  constructor(private eqityService: EquityServiceService) {}

  ngOnInit() {
    this.eqityService.isEquityLognTermDeleted$.subscribe(
      deleted => (this.isChildDeleted = deleted)
    );
  }

  onDeleted($event) {
    if ($event) {
      this.isChildDeleted = $event;
    }
  }
}
