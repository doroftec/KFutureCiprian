import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Product } from './products.model';

@Injectable()
export class TestPageService {

    constructor(private http: Http) { }

    private productsUrl = './app/test_page/products.json';

    getProducts(): Observable<Product[]>{
        return this.http.request(this.productsUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
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