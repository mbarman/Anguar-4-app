import { MainComponent } from '../main/main.component';
import { HomeGuard } from '../guards/home.guard';
import { LoginComponentComponent } from '../login/login-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';



const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/admin-module/admin-module.module#AdminModuleModule',
    canActivate: [HomeGuard]
  },
  {
    path: 'metadata-search/entity-type',
    loadChildren: 'app/metadata/metadata.module#MetadataModule',
    canActivate: [HomeGuard]
  },
  { path: 'login', component: LoginComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {
        // enableTracing: true
      })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModuleModule { }
