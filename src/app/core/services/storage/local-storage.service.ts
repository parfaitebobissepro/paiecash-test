import { Injectable } from '@angular/core';
import *  as CryptoJS from 'crypto-js';
import { environment } from 'environment';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  key = environment.keyEncryption;

  constructor() { }

  public saveData(key: string, data: any) {
    localStorage.setItem(key, this.encrypt(JSON.stringify(data)));
  }

  public getData(key: string): any {
    let data = localStorage.getItem(key) || "";
    return this.decrypt(data) ? JSON.parse(this.decrypt(data)) : this.decrypt(data);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}
