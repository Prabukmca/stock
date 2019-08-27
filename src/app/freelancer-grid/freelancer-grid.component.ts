import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS, AppState, IFreelancer } from '../Reducers/freelancers.reducer';
// import * as Rx from 'rxjs';

@Component({
  selector: 'app-freelancer-grid',
  templateUrl: './freelancer-grid.component.html',
  styleUrls: ['./freelancer-grid.component.scss']
})
export class FreelancerGridComponent implements OnInit {
  // public freelancers: Rx.Observable<Array<IFreelancer>>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  delete(freelancer: any) {
    this.store.dispatch({
      type: ACTIONS.DELETE_FREELANCER,
      payload: freelancer,
    })
  }
}
