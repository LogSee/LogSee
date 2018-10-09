import { Component, OnInit } from '@angular/core';
import {ConfigureService} from '../configure.service';
@Component({
	selector: 'app-configure',
	templateUrl: './configure.component.html',
	styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {
	constructor(private configureService: ConfigureService) {}
	currentConfig = this.configureService.GetConfig().subscribe(); // Todo: Get the current config and load the inputs with the current config values Warning: Angular sux.

	ngOnInit() {
	}

	PingInterval() {
		this.configureService.PingInterval().subscribe();
	}
}
