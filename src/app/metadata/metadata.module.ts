import { HeaderComponent } from '../header-component/header.component';
import { MaterialModule } from '../material/material.module';
import { MetadataRoutingModule } from './metadata-routing/metadata-routing.module';
import { EntityComponent } from './entity/entity.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list/entity-list.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { EntityService } from './service/entity.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AgGridModule.withComponents([
      HeaderComponent
    ]),
    MetadataRoutingModule
  ],
  declarations: [EntityListComponent, EntityComponent, HeaderComponent],
  providers : [EntityService]
})
export class MetadataModule {

 }
