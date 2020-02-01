import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "smc-autocomplete-filter",
  templateUrl: "./autocomplete-filter.component.html",
  styleUrls: ["./autocomplete-filter.component.scss"]
})
export class AutocompleteFilterComponent implements OnInit , AfterViewInit{
  method: any;
  itemList = ['carrot', 'banana', 'apple', 'potato', 'tomato', 'cabbage', 'turnip', 'okra', 'onion', 'cherries', 'plum', 'mango'];
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const input = <HTMLInputElement>document.getElementById("itemsearch");
    console.log(input);

    const search$= Observable.fromEvent(input, "keyup").do(() =>
      console.log(input.value)
    );

    search$.subscribe();
  }
}
