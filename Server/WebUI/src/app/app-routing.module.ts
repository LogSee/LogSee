import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Route Componenets to display
import { PageConfigComponent }  from './page-config/page-config.component';
import { PageStatsComponent }   from './page-stats/page-stats.component';
import { PageLogsComponent }    from './page-logs/page-logs.component';
import { PageHomeComponent }    from './page-home/page-home.component';

// Routes
const routes: Routes = [
  { path: '',       component: PageHomeComponent,   data: {routeIdx: 0, animation: 'HomePage'} },
  { path: 'logs',   component: PageLogsComponent,    data: {routeIdx: 1, animation: 'LogsPage'} },
  { path: 'stats',  component: PageStatsComponent,   data: {routeIdx: 2, animation: 'StatsPage'} },
  { path: 'config', component: PageConfigComponent,  data: {routeIdx: 3, animation: 'ConfigPage'} }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
