//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { ConfigureComponent } from './configure/configure.component';
import { HomeComponent } from './home/home.component';

//Services
import { MessageService }       from './message.service';
import { HttpErrorHandler }     from './http-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    ConfigureComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routingModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }