import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { ClientTest } from './clientTest.model';

@Injectable()
export class ClientsTestPageServices {

    public header = new Headers();

    constructor(private http: Http) { 
      this.header.append("Access-Control-Allow-Origin", "*");
      this.header.append("Access-Control-Allow-Methods", "POST");
      this.header.append("Access-Control-Max-Age", "3600");
      this.header.append("Access-Control-Allow-Headers", "X-requested-with, Content-Type");
    }

    getClients(): Observable<ClientTest[]>{
        return this.http.request('/KFutureCiprian/clients')
                    .map(res => res.json())
                    .catch(this.handleError);
    }

    saveOrUpdateClient(client: ClientTest){
      return this.http.post("/KFutureCiprian/saveOrupdate/",client)
      .map((response: Response) => response.json()).catch(this.handleError);
    };

    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

    deleteClient(clientId: Number) {
      return this.http
      .delete(`/KFutureCiprian/client/${clientId}`).map((response: Response) => response.json())
      .catch(this.handleError)
      .finally(() => console.log('Method Delete was finished!')
      );
  }

}