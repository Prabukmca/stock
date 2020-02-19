import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smc-dynamic-component-one',
  templateUrl: './dynamic-component-one.component.html',
  styleUrls: ['./dynamic-component-one.component.scss']
})
export class DynamicComponentOneComponent implements OnInit {

  @Input() message : string;
  constructor() { }

  ngOnInit() {
  }

}
