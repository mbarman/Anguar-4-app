import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AccessCheckService {

  private _url = this._window.nativeWindow.location.protocol + '//' +
                 this._window.nativeWindow.location.host + '/bedrock-app/services/rest/users/me/permissions?projectIds=1'

  public _permissions: any ;
  
  setValue(val) {
    this._permissions = val;
}

getValue() {
    return this._permissions ;
}

  constructor(private _http: Http, private _window: WindowService) { }

  public getPermission(): Observable<any> {

    const  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    const  options: RequestOptions = new RequestOptions({ headers: headers });

    return this._http
    .get(this._url, options)
    .map(this.extractData)
    .catch(this.handleError);
  }


  private extractData(res: Response) {
    const data = res.json();
    return data || {};
}

private handleError(error: any) {
    return Observable.throw(error);
}

}
