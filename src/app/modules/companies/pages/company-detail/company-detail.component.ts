import { Component } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent {
  public id?: number;
  public company?: Company;

  constructor(private companiesService: CompaniesService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      if (this.id) {
        this.company = this.companiesService.getCompanyById(this.id);
      }
    });
  }
}
