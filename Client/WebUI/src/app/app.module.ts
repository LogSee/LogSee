import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { ConfigureComponent } from './configure/configure.component';
import { HomeComponent } from './home/home.component';

import { routingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    ConfigureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }