import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smc-summary-inlet',
  templateUrl: './summary-inlet.component.html',
  styleUrls: ['./summary-inlet.component.scss']
})
export class SummaryInletComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    console.log('summary inlet called');
    this.router.navigate(['/ps/summary']);
  }

}
