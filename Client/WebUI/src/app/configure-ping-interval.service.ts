import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurePingIntervalService{
  constructor(private http:HttpClient) {
    this.http.post("http://127.0.0.1:1337/api/editconfig",
    {
      "Client": {
      "PingInterval": "100"
    }
    });
  }
};