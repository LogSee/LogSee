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
	){}

	PingInterval() {
	  return this.http.post('/api/configure/pinginterval', '{"pinginterval": 200}');
	};
	GetConfig() {
	  return this.http.get('/api/getConfig'); // Uhh yea, is weird. I hate angular.
	};
};
