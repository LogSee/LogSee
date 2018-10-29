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
	// Right so, now If I want to get, say the live status from the client.
	// We'd need to step 1) Write an entire seperate fucking service like this file
	// step 2) Write an API request in said service
	// step 3) write the endpoint on the clients bloody server
	// step 4) figure a way out within this angular service to have it check every 30 seconds or so
	// step 5) spend 10 years figuring the above out

	// Angular, what a mess. I don't wanna touch it at all.
};
