import { EntityComponent } from '../entity/entity.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntityListComponent } from '../entity-list/entity-list.component';


const metadataRoutes: Routes = [
  {
    path: '',
    component: EntityComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'entity-type-list', component: EntityListComponent },
          { path: '', redirectTo: '/entity-type-list', pathMatch: 'full' }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(metadataRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MetadataRoutingModule { }
