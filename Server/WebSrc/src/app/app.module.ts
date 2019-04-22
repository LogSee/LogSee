import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Material Angular (Bootstrap, version of Angular basically...)
// Note: To use more <mat-slider> modules, import them from @angular/material and add them to the [imports] list
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatMenuModule, 
  MatButtonToggleModule, 
  MatIconModule,
  MatProgressBarModule
} from '@angular/material';

// Custom Components
import { LogseeIcoAnimComponent }   from './logsee-ico-anim/logsee-ico-anim.component';
import { BootstrapComponent }       from './bootstrap/bootstrap.component';
import { NavbarComponent }          from './navbar/navbar.component';
import { LogseeIcoFullComponent }   from './logsee-ico-full/logsee-ico-full.component';
import { LogseeIcoTextComponent }   from './logsee-ico-text/logsee-ico-text.component';
import { FontawesomeComponent }     from './fontawesome/fontawesome.component';

// Custom Routing
import { AppRoutingModule }         from './app-routing.module';
import { PageConfigComponent }      from './page-config/page-config.component';
import { PageLogsComponent }        from './page-logs/page-logs.component';
import { PageStatsComponent }       from './page-stats/page-stats.component';
import { PageHomeComponent }        from './page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogseeIcoAnimComponent,
    BootstrapComponent,
    NavbarComponent,
    LogseeIcoFullComponent,
    LogseeIcoTextComponent,
    FontawesomeComponent,
    PageConfigComponent,
    PageLogsComponent,
    PageStatsComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatIconModule,
    AppRoutingModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
