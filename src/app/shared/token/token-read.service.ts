import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AutJWTService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isUserAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Simple check for token existence
  }

  getUserRole(): string {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role;
    }
    return '';
  }
}