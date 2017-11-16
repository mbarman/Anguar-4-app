import { HashLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { HomeGuard } from './guards/home.guard';
import { HttpModule } from '@angular/http';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { LoginComponentComponent } from './login/login-component.component';
import { ListDashboardComponentComponent } from './admin-module/components/list-dashboard-component/list-dashboard-component.component';
import { CookieService } from 'angular2-cookie/core';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { WindowService } from './service/window.service';
import { MaterialModule } from './material/material.module';
import { MenuService } from './service/menu.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessCheckService } from './service/access-check.service';
import { MenuFilterPipe } from './pipes/menu-filter.pipe';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModuleModule
  ],
  declarations: [
    AppComponent,
    LoginComponentComponent,
    PageNotFoundComponent,
    MainComponent,
    MenuComponent,
    MenuFilterPipe
  ],
  providers: [
                LoginService,
                CookieService,
                HomeGuard,
                MenuService,
                AccessCheckService,
                MenuFilterPipe,
                WindowService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
