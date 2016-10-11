import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValidationTestingService {
    private _baseUrl: string = 'rest/';

    constructor(private _http: Http) {}

    public testException(obj: any):Observable<any> {
        return this._http.post("test/forms", JSON.stringify(obj));
    }


    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }
}