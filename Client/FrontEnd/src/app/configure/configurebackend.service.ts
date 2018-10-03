import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

this.httpClient.post("http://127.0.0.1:1337/api/editconfig",
{
    "Client": {
        "PingInterval": "100"
    }
})
.subscribe(
    data => {
        console.log("POST Request is successful ", data);
    },
    error => {
        console.log("Error", error);
    }
);       