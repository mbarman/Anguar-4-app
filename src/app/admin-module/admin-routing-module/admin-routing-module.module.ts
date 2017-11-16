import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { HomeGuard } from '../../guards/home.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDashboardComponentComponent } from '../components/list-dashboard-component/list-dashboard-component.component';
import { AnalyzeInventoryComponentComponent } from '../components/analyze-inventory-component/analyze-inventory-component.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'analyze-inventory', component: AnalyzeInventoryComponentComponent },
          { path: 'dashboard-list', component: ListDashboardComponentComponent },
          { path: '', component: DashboardComponent }
        ]
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class AdminRoutingModuleModule { }
