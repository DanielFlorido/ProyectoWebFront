import { AutJWTService } from 'src/app/shared/token/token-read.service'; // Asegúrate de que la ruta sea correcta
import { CanActivateFn } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AutJWTService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const requiredRoles = route.data['roles'] as Array<string>;
    if (this.authService.isUserAuthenticated()) {
      const userRole = this.authService.getUserRole();
      if (requiredRoles.includes(userRole)) {
        return true;
      }
    }
    this.router.navigate(['/auth/login/user']); // Redirige a la página de login si no está autorizado
    return false;
  }
}