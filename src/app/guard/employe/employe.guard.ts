import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/admin/user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeGuard implements CanActivate {
  constructor(private route:Router,private auths:UserService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('role') == 'employee' && this.auths.IsLoggedIn()) {

        return true
      }
      else {

        this.route.navigate(['login']);

        return false
      }
  }

}
