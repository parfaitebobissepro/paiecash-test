import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SharedModule } from './modules/shared/shared.module';
import { UsersModule } from './modules/users/users.module';
import { UsersRoutingModule } from './modules/users/users-routing.module';
import { CompaniesRoutingModule } from './modules/companies/companies-routing.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent
  ],
  imports: [
    UsersModule,
    CompaniesModule,
    UsersRoutingModule,
    CompaniesRoutingModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
