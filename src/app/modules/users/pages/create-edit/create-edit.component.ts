import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ROLES_USER } from 'src/app/utils/enums';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent {
  public form: FormGroup;
  public role_user = ROLES_USER;
  public id?: number;
  public currentUser?: User;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private companiesService: CompaniesService, private route: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      company: ['', Validators.required],
      name: ['', Validators.required],
      phone: [''],
      role: ['', Validators.required],
      active: [false],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    })
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      if (this.id) {
        this.currentUser = this.getUserById(this.id);
        this.fillFormCompany();
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const user = new User(this.form.value);
      if (this.id) {
        this.userService.updateUser({ ...user, id: this.id });
      } else {
        this.userService.setUsers([user]);
      }
      this.router.navigate(['/users']);

    }
  }

  getCompanies() {
    return this.companiesService.getCompanies();
  }

  getCompanyById(id?: number) {
    return this.companiesService.getCompanyById(id);
  }

  getUserById(id?: number) {
    return this.userService.getUserById(id);
  }

  fillFormCompany() {
    this.form.patchValue({ ...this.currentUser, cpassword: this.currentUser?.password})
  }

}
