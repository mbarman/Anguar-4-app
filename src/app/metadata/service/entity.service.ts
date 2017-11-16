import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { WindowService } from '../../service/window.service';

@Injectable()
export class EntityService {

  constructor(private _http: Http, private _window: WindowService) {}
  private _url = this._window.nativeWindow.location.protocol
  + '//' + this._window.nativeWindow.location.host
  + '/bedrock-app/services/rest/entities/search?projectIds=1';

  getEntityList(request: any): Observable<any> {
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
