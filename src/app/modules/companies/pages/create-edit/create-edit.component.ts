import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from '../../services/companies.service';
import { Company } from '../../models/company';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent {
  public form: FormGroup;
  public id?: number;
  public currentCompany?: Company;

  constructor(private formBuilder: FormBuilder, private companiesService: CompaniesService, private route: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      uin: ['', Validators.required],
      address: ['', Validators.required],
      phone: [''],
      city: ['', Validators.required],
      website: ['']
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      if (this.id) {
        this.currentCompany = this.getCompanyById(this.id);
        this.fillFormCompany();
      }
    });
  }


  onSubmit() {
    if (this.form.valid) {
      const company = new Company(this.form.value);
      if (this.id) {
        this.companiesService.updateCompany({ ...company, id: this.id });
      } else {
        this.companiesService.setCompanies([company]);
      }
      this.router.navigate(['/companies']);
    }
  }


  getCompanyById(id?: number) {
    return this.companiesService.getCompanyById(id);
  }

  fillFormCompany() {
    this.form.patchValue({ ...this.currentCompany })
  }

}

