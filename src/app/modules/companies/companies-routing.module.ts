import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./pages/list/list.component";
import { CreateEditComponent } from "./pages/create-edit/create-edit.component";
import { CompanyDetailComponent } from "./pages/company-detail/company-detail.component";
import { AuthenticationGuard } from "src/app/core/guards/authentication.guard";

const routes: Routes = [
  {
    path: 'companies', canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'create',
        component: CreateEditComponent,
      },
      {
        path: 'edit/:id',
        component: CreateEditComponent,
      },
      {
        path: ':id',
        component: CompanyDetailComponent,
      }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }