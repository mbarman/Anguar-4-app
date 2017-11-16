import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdGridListModule, MdInputModule, MdRadioModule, MdMenuModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdRadioModule,
    MdMenuModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdRadioModule,
    MdMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
