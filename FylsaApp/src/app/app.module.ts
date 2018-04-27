import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AlertModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CompanyComponent } from './company/company.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CompanyComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      AlertModule.forRoot(),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
