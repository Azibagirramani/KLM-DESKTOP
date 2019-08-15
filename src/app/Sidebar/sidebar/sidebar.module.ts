import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component'


@NgModule({
  declarations: [ SidebarComponent ],
  imports:  [
    RouterModule,
    CommonModule,
  ]
})
export class SidebarModule { }
