import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,  } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      private AuthService: AuthService,
      private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
  ): boolean {
    if(this.AuthService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}


