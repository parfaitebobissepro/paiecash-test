import { Injectable } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../models/user';
import { LocalStorageService } from 'src/app/core/services/storage/local-storage.service';

const storageKeyUsers = 'users';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private $usersSubject = new BehaviorSubject<User[]>([]);
  private $users = this.$usersSubject.asObservable().pipe(distinctUntilChanged());

  constructor(public localStorageService: LocalStorageService) {
    this.getUsersFromStorage();
  }

  setUsers(users: User[]): void {
    this.$usersSubject.next([...this.$usersSubject.getValue(), ...users]);
    this.localStorageService.saveData(storageKeyUsers, this.$usersSubject.getValue());
  }

  clearUsers(): void {
    this.$usersSubject.next([]);
  }

  getUsers() {
    return this.$users;
  }

  getUsersFromStorage() {
    const users = this.localStorageService.getData(storageKeyUsers) as User[];
    this.setUsers(users);
  }

  updateUser(user: User): number {
    let copyUsers = [...this.$usersSubject.getValue()];
    const oldIndexUser = copyUsers.findIndex((current) => current.id == user.id);
    copyUsers.splice(oldIndexUser, 1);
    copyUsers.push(user);
    this.clearUsers();
    this.setUsers(copyUsers);
    return user.id;
  }

  getUserById(id: number | undefined) {
    return this.$usersSubject.getValue().find((user) => user.id == id);
  }

  deleteUser(id?: number){
    let copyCompanies = [...this.$usersSubject.getValue()];
    const oldIndexCompany = copyCompanies.findIndex((current) => current.id == id);
    copyCompanies.splice(oldIndexCompany, 1);
    this.clearUsers();
    this.setUsers(copyCompanies);
    return id;
  }
}
