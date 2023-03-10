import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuardService implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router,
    public location: Location
  ) {}
  getRoles(t) {
    try {
      const role = t.split('!!')[1];
      const roles = role.split(',');
      return roles;
    } catch (error) {
      return [];
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const roles = this.getRoles(token);
    if (!this.auth.isAuthenticated() || !roles.includes(expectedRole)) {
      this.location.replaceState('/');
      this.router.navigate(['login'], {
        queryParams: { redirectURL: state.url },
      });

      return false;
    }
    return true;
  }
}
