import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smc-dynamic-component-two',
  templateUrl: './dynamic-component-two.component.html',
  styleUrls: ['./dynamic-component-two.component.scss']
})
export class DynamicComponentTwoComponent implements OnInit {

  @Input() message : string;
  
  constructor() { }

  ngOnInit() {
  }

}
