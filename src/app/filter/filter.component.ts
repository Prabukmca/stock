import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/merge';

import { IFilter } from '../Reducers/filter.reducer';

@Component({
  selector: 'app-filter',
  template: '<form class="filter">' +
    '<label>Name</label>' +
    '<input type="text" [formControl]="name" name="name"/>' +
    '<label>Email</label>' +
    '<input type="text" [formControl]="email" name="email"/>' +
    '<a (click)="clearFilter()" class="btn btn-default">Clear Filter</a>' +
    '</form>',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filter() {
    throw new Error("Method not implemented.");
  }
  public name = new FormControl();
  public email = new FormControl();

  constructor(private store: Store<any>) {
    store.select('filter').subscribe((filter: IFilter) => {
      this.name.setValue(filter.name);
      this.email.setValue(filter.email);
    })
    // Observable.merge(this.name.valueChanges, this.email.valueChanges).debounceTime(1000)
    //   .subscribe(() => this.filter());

  }

  ngOnInit() {
    
  }

}


