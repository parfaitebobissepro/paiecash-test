import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { Company } from 'src/app/modules/companies/models/company';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public activeModal: boolean = false;
  public currentEditId?: number;
  public $users?: Observable<User[]>;
  public companies: Company[] = [];

  constructor(private userService: UsersService, private companiesService: CompaniesService) {
    this.$users = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  showModalDelete(id?: number): void {
    this.activeModal = !this.activeModal;
    this.currentEditId = id;
  }

  setModalValue(value: boolean): void {
    this.activeModal = value;
  }

  deleteUser(confirm: boolean) {
    if (confirm) {
      this.setModalValue(false);
      this.userService.deleteUser(this.currentEditId);
    }
  }

  getCompanies(): void {
    this.companiesService.getCompanies().subscribe((companies) => this.companies = companies).unsubscribe();
  }

  getCompanyById(id?: number) {
    const companyFound = this.companiesService.getCompanyById(id);
    return companyFound ? `${companyFound.uin} - ${companyFound.name}` : '';
  }

}