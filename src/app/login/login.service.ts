import { window } from 'rxjs/operator/window';
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { WindowService } from '../service/window.service';


@Injectable()
export class LoginService {


    constructor(private _http: Http, private _window: WindowService) {}
     private _url = this._window.nativeWindow.location.protocol + '//' + this._window.nativeWindow.location.host + '/bedrock-app/services/rest/login';
    login(user: any): Observable<any> {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    let options: RequestOptions = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);

    return this._http
        .post(this._url, body, options )
        .map(this.extractData)
        .catch(this.handleError);
    }


  private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }

}
