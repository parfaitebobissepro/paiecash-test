import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./pages/list/list.component";
import { CreateEditComponent } from "./pages/create-edit/create-edit.component";
import { UserDetailComponent } from "./pages/user-detail/user-detail.component";
import { NgModule } from "@angular/core";
import { AuthenticationGuard } from "src/app/core/guards/authentication.guard";

const routes: Routes = [
  {
    path: 'users', canActivate: [AuthenticationGuard],
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
        component: UserDetailComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }