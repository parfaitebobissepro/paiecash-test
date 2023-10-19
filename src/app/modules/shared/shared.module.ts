import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ConfirmDailogComponent } from './components/confirm-dailog/confirm-dailog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ConfirmDailogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    ConfirmDailogComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
