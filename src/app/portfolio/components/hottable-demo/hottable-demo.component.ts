import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../services/portfolio.service";
import * as Handsontable from "handsontable";
import { HottableModel, flagRenderer } from "../../models/hottable.model";

@Component({
  selector: "smc-hottable-demo",
  templateUrl: "./hottable-demo.component.html",
  styleUrls: ["./hottable-demo.component.scss"]
})
export class HottableDemoComponent implements OnInit {
  dataset: HottableModel[];
  errorMessage: any;
  dataObject: HottableModel[];

  constructor(private portfolioService: PortfolioService) {}

  hotSettings = {
    data: this.dataObject,
    columns: [
      {
        data: "id",
        type: "numeric",
        width: 40
      },
      {
        data: "flag",
        renderer: flagRenderer
      },
      {
        data: "currencyCode",
        type: "text"
      },
      {
        data: "currency",
        type: "text"
      },
      {
        data: "level",
        type: "numeric",
        numericFormat: {
          pattern: "0.0000"
        }
      },
      {
        data: "units",
        type: "text"
      },
      {
        data: "asOf",
        type: "date",
        dateFormat: "MM/DD/YYYY"
      },
      {
        data: "onedChng",
        type: "numeric",
        numericFormat: {
          pattern: "0.00%"
        }
      }
    ],
    stretchH: "all",
    width: 805,
    autoWrapRow: true,
    height: 487,
    maxRows: 22,
    rowHeaders: true,
    colHeaders: [
      "ID",
      "Country",
      "Code",
      "Currency",
      "Level",
      "Units",
      "Date",
      "Change"
    ],
    contextMenu: true,
    manualRowMove: true,
    manualColumnMove: true,
    columnSorting: {
      indicator: true
    },
    autoColumnSize: {
      samplingRatio: 23
    },
    filters: true,
    dropdownMenu: true
  };

  loadHotSettings() {
    console.log("inside loadhotsettings");
    // this.hotSettings:Handsontable.GridSettings
  }

  ngOnInit() {
    this.getHotTableDataset();
  }
  getHotTableDataset() {
    this.portfolioService.getHotTable().subscribe(
      (data: HottableModel[]) => {
        this.dataObject = data;
        console.log("inside load data");
        this.loadHotSettings();
      },
      (error: any) => (this.errorMessage = <any>error)
    );
  }
}
