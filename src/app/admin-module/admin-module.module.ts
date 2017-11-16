import { DashboardService } from './service/dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDashboardComponentComponent } from './components/list-dashboard-component/list-dashboard-component.component';
import { AnalyzeInventoryComponentComponent } from './components/analyze-inventory-component/analyze-inventory-component.component';
import { AdminRoutingModuleModule } from './admin-routing-module/admin-routing-module.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AgGridModule } from 'ag-grid-angular/main';
// import 'ag-grid-enterprise';


@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    AdminRoutingModuleModule
  ],
  declarations: [
                  ListDashboardComponentComponent,
                  AnalyzeInventoryComponentComponent,
                  DashboardComponent,
                  HomeComponent],
  providers: [
   DashboardService
  ]
})
export class AdminModuleModule { }
