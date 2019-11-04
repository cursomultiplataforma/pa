import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pa';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    const options: any = {
      headers: new HttpHeaders(),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };

    this.http.get(environment.api, options).subscribe(
      resp => { console.log('test get ok'); },
      error => { console.log('err get'); }
    );
  }
}
