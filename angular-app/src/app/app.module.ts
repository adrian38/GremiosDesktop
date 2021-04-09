import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';


//////////////////////////////Servicios
import {AuthOdooService} from './services/auth-odoo.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthOdooService,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
