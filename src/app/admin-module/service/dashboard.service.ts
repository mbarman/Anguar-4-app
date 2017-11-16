import { WindowService } from '../../service/window.service';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DashboardService {
  constructor(private _http: Http, private _window: WindowService) { }
  private _url = this._window.nativeWindow.location.protocol
  + '//' + this._window.nativeWindow.location.host
  + '/bedrock-app/services/rest/dashboard/search?projectIds=1';
  getDashboardList(request: any): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(request);

    return this._http
      .post(this._url, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }

}
