import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-market';
  result: Object;

  constructor(private http: HttpClient) {


  }
  onGet() {
    this.http.get('http://localhost:3000/taxsavings').subscribe((data) => {
      console.log('data', data);
      this.result = data;
    })
  }

  onPost() {
    const sample = {
      "id": 3,
      "title": "dept-investment",
      "author": "pk"
    }
    let body = JSON.stringify(sample);
    this.http.post('http://localhost:3000/taxsavings/', body, httpOptions).subscribe((data) => {
      this.result = data;
    })
  }

  onUpdate(){
    const sample = {
      "id": 3,
      "title": "dept-investment",
      "author": "test author"
    }
    let body = JSON.stringify(sample);
    this.http.put('http://localhost:3000/taxsavings/3', body, httpOptions).subscribe((data) => {
      this.result = data;
    })
  }
}

