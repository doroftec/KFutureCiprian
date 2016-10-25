import {CanLoad, Route} from "@angular/router";
import {Injectable} from "@angular/core";

import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanLoad{

      constructor(private _loginService: LoginService) {}

      canLoad(routeApp: Route) :boolean{
          return this.checkRoute(routeApp);
      }

      private checkRoute(routeApp: Route):boolean{

        if(this._loginService.arrOfRoutesPerUser != null){
            for(let routeUser of this._loginService.arrOfRoutesPerUser){
                if(routeApp.path == routeUser){
                    return true;
                }
            }
        }
        return false;
      }
}