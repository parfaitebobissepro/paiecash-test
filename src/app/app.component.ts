import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { Auth } from './utils/types';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public auth?: Auth;
  public $auth?: Observable<Auth>;
  public $$auth?: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    

  }

  ngOnInit(): void {
    this.$auth = this.authService.getAuth();
    
    this.$$auth = this.$auth.subscribe((auth) => {
      this.auth = auth;
      if (auth.connected) this.router.navigateByUrl('/users')
    })
  }

  ngOnDestroy(): void {
    this.$$auth?.unsubscribe();
  }

}
