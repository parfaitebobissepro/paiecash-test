import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Auth } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {
  private auth?: Auth;
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getAuth().pipe(map((auth) => {
      if (!auth?.connected) {
        this.router.navigateByUrl('/');
        return false;
      } else {
        return true;
      }
    }))
  }
}
