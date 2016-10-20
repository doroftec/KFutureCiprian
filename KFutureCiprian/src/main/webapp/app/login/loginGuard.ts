import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {LoginService} from "./login.service";
import { Inject } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { AppService } from '../shared/services/app.service';

@Injectable()
export class LoginGuard implements CanActivate{

      username: string = 'micko';
      isMickoOn: boolean;

      constructor(private loginService: LoginService, private _cookieService: CookieService) { 
      }

      canActivate() {
        return this.checkIfLoggedIn();
      }

      checkIfLoggedIn(): boolean{
      let username;
      if(AppService.bTokenExpired && this._cookieService.get('username') != null){
          this._cookieService.remove('username');
      }else{
          username = this._cookieService.get('username');
      }

      if(username == null){
          alert("LoginGuard: As guest you don't have access on this page!");
          return false;
      }
      else if(username != this.username){
          alert("LoginGuard: This user has not access on this page!");
          console.log("LoginGuard: This user has not access on this page!");
          return false;
      }else if(username == this.username){
          console.log("LoginGuard: This user has access on this page!");
          return true;
      }
  }
}