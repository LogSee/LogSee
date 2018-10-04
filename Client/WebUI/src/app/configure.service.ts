import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


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
    private handleError: HandleError
  ) { }
  
    private url = 'http://127.0.0.1:1337/api/editconfig';
    PingInterval() {
      return this.http.post(this.url, {"Client": { "PingInterval": 100 }} , httpOptions )
      .pipe(
        catchError(this.handleError('PingInterval'))
      );
    }
}
