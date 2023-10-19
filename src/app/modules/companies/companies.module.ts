import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.component';
import { CreateEditComponent } from './pages/create-edit/create-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateEditComponent,
    ListComponent,
    CompanyDetailComponent,
    CreateEditComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CompaniesModule { }
