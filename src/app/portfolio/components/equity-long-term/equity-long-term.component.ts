import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { EquityServiceService } from "../../services/equity-service.service";

@Component({
  selector: "smc-equity-long-term",
  templateUrl: "./equity-long-term.component.html",
  styleUrls: ["./equity-long-term.component.scss"]
})
export class EquityLongTermComponent implements OnInit {
  private _terms: any;
  public get equityType(): any {
    return this._terms;
  }
  @Input()
  public set equityType(value: any) {
    this._terms = value;
  }
  @Output() delete = new EventEmitter<boolean>();

  constructor(private eqityService: EquityServiceService) {}

  ngOnInit() {}

  onDelete() {
    this.delete.emit(true);
    this.eqityService.eqityLongTermDeleteDetected(true);
  }
}
