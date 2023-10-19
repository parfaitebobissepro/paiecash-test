import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/storage/local-storage.service';
import { Company } from '../models/company';

const storageKeyCompanies = 'companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private $companiesSubject = new BehaviorSubject<Company[]>([]);
  private $companies = this.$companiesSubject.asObservable().pipe(distinctUntilChanged());

  constructor(public localStorageService: LocalStorageService) {
    this.getCompaniesFromStorage();
  }

  setCompanies(companies: Company[]): void {
    this.$companiesSubject.next([...this.$companiesSubject.getValue(), ...companies]);
    this.localStorageService.saveData(storageKeyCompanies, this.$companiesSubject.getValue());
  }

  clearCompanies(): void {
    this.$companiesSubject.next([]);
  }

  getCompanies() {
    return this.$companies;
  }

  getCompaniesFromStorage() {
    const companies = this.localStorageService.getData(storageKeyCompanies) as Company[];
    this.setCompanies(companies);
  }

  getCompanyById(id?: number) {
    return this.$companiesSubject.getValue().find((company) => company.id == id);
  }

  updateCompany(company: Company): number {
    let copyCompanies = [...this.$companiesSubject.getValue()];
    const oldIndexCompany = copyCompanies.findIndex((current) => current.id == company.id);
    copyCompanies.splice(oldIndexCompany, 1);
    copyCompanies.push(company);
    this.clearCompanies();
    this.setCompanies(copyCompanies);
    return company.id;
  }

  deleteCompany(id?: number){
    let copyCompanies = [...this.$companiesSubject.getValue()];
    const oldIndexCompany = copyCompanies.findIndex((current) => current.id == id);
    copyCompanies.splice(oldIndexCompany, 1);
    this.clearCompanies();
    this.setCompanies(copyCompanies);
    return id;
  }

}
