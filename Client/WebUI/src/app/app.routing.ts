import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { ConfigureComponent } from './configure/configure.component';
import { StatusComponent } from './status/status.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent } from './about/about.component';
const routes: Routes = [
    { path: 'configure', component: ConfigureComponent },
    { path: 'status', component: StatusComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: '',  redirectTo: '/home', pathMatch: 'full'}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);