import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, ResponseContentType } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { FileUploadTest } from './fileUploadTest.model';

@Injectable()
export class FileUploadTestService {


    constructor(private http: Http) { }

    private url = 'rest/uploadedFiles';

    getUploadedBlobsFiles(): Observable<FileUploadTest[]>{
        return this.http.get(this.url)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    downloadPDF(id: number):any{
      return this.http.get(`rest/downloadPDF/${id}`, {
        responseType: ResponseContentType.Blob}).map(response =>
        {return new Blob([response.blob()], { type: 'application/pdf' })});
    }

    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}