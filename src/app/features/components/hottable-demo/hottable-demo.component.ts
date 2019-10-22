import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../../features/services/portfolio.service";
import Handsontable from "handsontable";

import { HottableModel, flagRenderer } from "../../../features/models/hottable.model";
import { getBasicData } from "./hottable-demo.data";

@Component({
  selector: "smc-hottable-demo",
  templateUrl: "./hottable-demo.component.html",
  styleUrls: ["./hottable-demo.component.scss"]
})
export class HottableDemoComponent  { 

   data: any[] = getBasicData(10);
   colHeaders: string[] = [
    "Item/Code",
    "Product Name",
    "Selling Price",
    "Quantity",
    "Unit",
    "Tax",
    "Action"
  ];
   columns: any[] = [
    {
      data: "item",
      type: "numeric"
    },
    {
      data: "name",
      type: "text",
      allowEmpty:false
    },
    {
      data: "price",
      type: "numeric"
    },
    {
      data: "qty",
      type: "numeric"
    },
    {
      data: "unit",
      type: "dropdown",
      source: ["Pounds", "Gram", "KG", "Piece", "Carton"]
    },
    {
      data: "tax",
      type: "dropdown",
      source: ["None", "GST", "WET"]
    },
    {
      data: "button",
      renderer: "html"
    }
  ];
   colWidths: number[] = [14, 14, 14, 14, 14, 14, 14];
   options: any = {
    stretchH: "all",
    columnSorting: true,
    contextMenu: ["row_above", "row_below", "remove_row"]
  };

   afterChange(e: any, table) {
    
    // this.sub_product_data.push(table.data);
  }

   afterOnCellMouseDown(e: any) {
    console.log(e);
  }
}
