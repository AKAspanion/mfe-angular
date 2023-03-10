import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router,
    public location: Location
  ) {}
  canActivate(_, state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuthenticated()) {
      this.location.replaceState('/');
      this.router.navigate(['login'], {
        queryParams: { redirectURL: state.url },
      });
      return false;
    }
    return true;
  }
}
