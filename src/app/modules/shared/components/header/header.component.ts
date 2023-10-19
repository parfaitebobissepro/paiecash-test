import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Auth } from 'src/app/utils/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public auth?: Auth;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAuth();
  }

  getAuth() {
    this.authService.getAuth().subscribe((auth) => this.auth = auth).unsubscribe();
  }

  logOut() {
    this.authService.logOut().subscribe((auth) => {
      if (!auth.connected) {
        this.router.navigate(['/']);
      }
    });
  }
}
