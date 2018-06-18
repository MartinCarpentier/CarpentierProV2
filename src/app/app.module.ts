import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HashtesterComponent } from './hashtester/hashtester.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { ToolsComponent } from './tools/tools.component';
import { EncryptiontoolComponent } from './encryptiontool/encryptiontool.component';


@NgModule({
  declarations: [
    AppComponent,
    HashtesterComponent,
    HomeComponent,
    ToolsComponent,
    EncryptiontoolComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
