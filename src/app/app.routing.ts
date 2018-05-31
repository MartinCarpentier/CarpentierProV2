import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HashtesterComponent } from './hashtester/hashtester.component';
import { HomeComponent } from './home/home.component';


export const AppRoutes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
  },
  {
      path: 'hashtester',
      component: HashtesterComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
]