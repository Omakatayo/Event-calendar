import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAdmin(): boolean{
    if (localStorage.getItem('ADMIN')=='ADMIN') {
      return true;
    }else{
      return false;
    }

  }

  isOrganizer(): boolean{
    if (localStorage.getItem('ORGANIZER')=='ORGANIZER' || localStorage.getItem('ADMIN')=='ADMIN') {
      return true;
    }else{
      return false;
    }

  }
}
