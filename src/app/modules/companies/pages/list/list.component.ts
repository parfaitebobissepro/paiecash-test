import { Component } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { Company } from '../../models/company';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  public activeModal: boolean = false;
  public currentEditId?: number;
  public $companies?: Observable<Company[]>;

  constructor(private companiesService:CompaniesService){
    this.$companies = this.companiesService.getCompanies();
  }

  ngOnInit(): void {
    
  }

  showModalDelete(id?: number): void {
    this.activeModal = !this.activeModal;
    this.currentEditId = id;
  }

  setModalValue(value: boolean): void {
    this.activeModal = value;
  }

  deleteCompany(confirm: boolean) {
    if (confirm) {
      this.setModalValue(false);
      this.companiesService.deleteCompany(this.currentEditId);
    }
  }
}
