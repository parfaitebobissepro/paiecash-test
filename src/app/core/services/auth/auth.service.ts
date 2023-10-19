import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';
import { LocalStorageService } from '../storage/local-storage.service';
import { Auth } from 'src/app/utils/types';
import { ROLES_USER } from 'src/app/utils/enums';

const storageKeyAuth = 'auth';


const admin = { id: 0, email: 'parfaitebobissepro@gmail.com', name: 'EBOBISSE EPOUNE', username: 'parfaitebobisse', role: ROLES_USER.admin, password: 'paiecash' }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private $authSubject = new BehaviorSubject<Auth>({ currentUser: admin, connected: false });
  private $auth = this.$authSubject.asObservable().pipe(distinctUntilChanged());

  constructor(public localStorageService: LocalStorageService) {
    if(!this.getAuthFormStorage().currentUser){
      this.setDefaultAdmin();
    }
  }

  signIn(data: any): Observable<Auth> {
    this.$authSubject.next({ currentUser: admin, connected: data.email == admin.email && data.password == admin.password });
    this.localStorageService.saveData(storageKeyAuth, this.$authSubject.getValue());
    return this.$auth;
  }

  setDefaultAdmin(): Observable<Auth> {
    this.$authSubject.next({ currentUser: admin, connected: false });
    this.localStorageService.saveData(storageKeyAuth, this.$authSubject.getValue());
    return this.$auth;
  }

  logOut(): Observable<Auth> {
    this.$authSubject.next({ currentUser: admin, connected: false });
    this.localStorageService.saveData(storageKeyAuth, this.$authSubject.getValue());
    return this.$auth;
  }

  getAuth(): Observable<Auth> {
    return this.$auth;
  }

  isConnected(): Observable<Boolean> {
    return this.$auth.pipe(map((auth) => auth.connected));
  }

  getAuthFormStorage() {
    const auth = this.localStorageService.getData(storageKeyAuth) as Auth;
    this.$authSubject.next(auth);
    return auth;
  }

}
