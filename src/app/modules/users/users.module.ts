import { NgModule } from '@angular/core';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateEditComponent } from './pages/create-edit/create-edit.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';



@NgModule({
  declarations: [ListComponent, CreateEditComponent, UserDetailComponent],
  imports: [
    SharedModule
  ]
})
export class UsersModule { }
