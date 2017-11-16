import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
public isLoggedIn ;
constructor(private _cookieService: CookieService, private _router: Router) {}

getCookie(key: string) {
    return this._cookieService.get(key);
  }

  get logInStatus(): any {
     /* if (this.getCookie('bedrockLogin') === 'true') {
      console.log(this._router.url);
      return 'true' ;
    }else {
      console.log(this._router.url);
      return 'false' ;
    } */

    if (this._router.url !== '/login') {
      return 'true' ;
    }else {
      return 'false' ;
    }
  }
ngOnInit() {
  // this.logInStatus() ;
}

}
