import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smc-dynamic-component-three',
  templateUrl: './dynamic-component-three.component.html',
  styleUrls: ['./dynamic-component-three.component.scss']
})
export class DynamicComponentThreeComponent implements OnInit {

  @Input() message : string;
  
  constructor() { }

  ngOnInit() {
  }

}
