import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class HomeGuard implements CanActivate {

  constructor(private router: Router, private _cookieService: CookieService) { }
  getCookie(key: string) {
    return this._cookieService.get(key);
  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.getCookie('bedrockLogin') === 'true') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
