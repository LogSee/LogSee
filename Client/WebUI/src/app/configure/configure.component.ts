import { Component, OnInit } from '@angular/core';
import {ConfigureService} from '../configure.service';
@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {

  constructor(private configureService: ConfigureService) { }


  ngOnInit() {
  }

  PingInterval() {
    this.configureService.PingInterval();
 }
}
