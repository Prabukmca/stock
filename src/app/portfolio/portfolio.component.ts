import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smc-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  runWorker(){
    const demoWorker = new Worker('../demo.worker',{type:'module'});

    demoWorker.onmessage = (message) =>{
      console.log(`Got message`, message.data);
    }

    demoWorker.postMessage('hey');
  }

}
