import { Component, OnInit } from "@angular/core";

@Component({
  selector: "smc-equity-terms",
  templateUrl: "./equity-terms.component.html",
  styleUrls: ["./equity-terms.component.scss"]
})
export class EquityTermsComponent implements OnInit {
  terms: { id: number; name: string }[];
  constructor() {}

  ngOnInit() {
    this.terms = [
      {
        id: 1,
        name: "owsal"
      },
      {
        id: 2,
        name: "dsb"
      },
      {
        id: 3,
        name: "reliance"
      }
    ];
  }  
}
