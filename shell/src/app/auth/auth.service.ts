import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}
  private isTokenExpired(t: string) {
    try {
      const token = t.split('!!')[0];
      const [start, end] = token.split('##');
      const currentDate = new Date().getTime();
      const dStart = new Date(start).getTime();
      const dEnd = new Date(end).getTime();

      if (currentDate > dStart && currentDate <= dEnd) {
        return false;
      }

      return true;
    } catch (error) {
      return true;
    }
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const isExpired = this.isTokenExpired(token);
    return !isExpired;
  }
}
