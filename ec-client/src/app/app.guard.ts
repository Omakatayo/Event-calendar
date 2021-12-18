import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';

@Injectable({providedIn: 'root'})
export class OktaAuthGuard implements CanActivate {
  constructor(private oktaAuth: OktaAuth) {}

  async canActivate() {
    const authenticated = await this.oktaAuth.isAuthenticated();
     if (authenticated) { return true; }

    this.oktaAuth.signInWithRedirect();
    return false;
  }
}

@Injectable({providedIn: 'root'})
export class OktaAuthGuardAdminOrganizer implements CanActivate {
  constructor(private oktaAuth: OktaAuth, private router: Router) {}

  async canActivate() {
    const authenticated = await this.oktaAuth.isAuthenticated();
    const admin = localStorage.getItem('ADMIN')!;
    const organizer = localStorage.getItem('ORGANIZER')!;

    if (authenticated && (admin || organizer)) { 
        return true; 
    }
    else if (authenticated && !(admin || organizer)) {
        alert("You don't have permision to view this page!")
        this.router.navigate(['home'])
    }
    else {
        this.oktaAuth.signInWithRedirect();  
    }
    return false;
  }
}

@Injectable({providedIn: 'root'})
export class OktaAuthGuardAdmin implements CanActivate {
  constructor(private oktaAuth: OktaAuth, private router: Router) {}

  async canActivate() {
    const authenticated = await this.oktaAuth.isAuthenticated();
    const admin = localStorage.getItem('ADMIN');

    if (authenticated && admin) { 
        return true; 
    }
    else if (authenticated && !admin) {
        alert("You don't have permision to view this page!")
        this.router.navigate(['home'])
    }
    else {
        this.oktaAuth.signInWithRedirect();  
    }
    return false;
  }
}