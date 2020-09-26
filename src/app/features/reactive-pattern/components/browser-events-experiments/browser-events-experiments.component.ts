import { Component, OnInit } from "@angular/core";

@Component({
  selector: "smc-browser-events-experiments",
  templateUrl: "./browser-events-experiments.component.html",
  styleUrls: ["./browser-events-experiments.component.scss"]
})
export class BrowserEventsExperimentsComponent implements OnInit {
  hoverSection: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.hoverSection = document.getElementById("hover");
    this.hoverSection.addEventListener("mousemove", onMouseMove);
  }

  unsubscribe() {
    this.hoverSection.removeEventListener("mousemove", onMouseMove);
  }
}
function onMouseMove(ev: MouseEvent) {
  console.log(ev);
}
