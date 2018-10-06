import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ConfigureService {
  constructor(
    private http: HttpClient,

  ) { }
  

    PingInterval() {
      this.http.post('http://172.16.1.51:3000/client/', '{"pinginterval": 200}');
    };
};
