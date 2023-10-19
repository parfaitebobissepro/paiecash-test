import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { Company } from 'src/app/modules/companies/models/company';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  public id?: number;
  public currentUser?: User;
  public company?: Company;

  constructor(private route: ActivatedRoute, private userService: UsersService, private companiesService: CompaniesService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      if (this.id) {
        this.currentUser = this.getUserById(this.id);
        this.company = this.companiesService.getCompanyById(this.currentUser?.company);
      }
    });
  }

  getUserById(id?: number) {
    return this.userService.getUserById(id);
  }

  getCompanyById(id?: number) {
    return this.companiesService.getCompanyById(id);
  }
}
