import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smc-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}
