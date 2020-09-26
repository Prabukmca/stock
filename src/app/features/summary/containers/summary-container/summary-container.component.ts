import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smc-summary-container',
  templateUrl: './summary-container.component.html',
  styleUrls: ['./summary-container.component.scss']
})
export class SummaryContainerComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    this.router.navigate(['/ps/summary']);

  }

}
