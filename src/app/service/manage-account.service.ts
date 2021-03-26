import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageAccountService {
  baseurl = environment.baseUrl1;

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  public async isLoggedIn() {
    const tempToken = this.cookieService.get('tokenData');

    await this.http.get(this.baseurl + 'verifyToken', {
      headers: {token:tempToken}
    }).subscribe(resp => {
      return true;
    }, error => {
      return false;
    });


  }
  logOut(){
    this.clearCookies();


  }
  clearCookies(){
    localStorage.removeItem('tokenData');
  }

}
