import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { QueryRef } from 'apollo-angular/query-ref';
import { gql } from 'graphql-tag';

const EMPLOYEES_QUERY = gql`
  query {
    books {
        name
    }
  }
`;

@Component({
  selector: 'smc-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  employees: any[] = [];

  private query: QueryRef<any>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: EMPLOYEES_QUERY,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      debugger;
      this.employees = result.data && result.data.employees;
    });

    this.apollo
      .query<any>({
        query: gql`
          {
            books {
              name
            }
          }
        `
      })
      .subscribe(
        (data) => {
          debugger;
        }
      );
  }

  runWorker() {
    const demoWorker = new Worker('../demo.worker', { type: 'module' });

    demoWorker.onmessage = (message) => {
      console.log(`Got message`, message.data);
    }

    demoWorker.postMessage('hey');
  }

}
