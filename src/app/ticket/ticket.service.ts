import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Iticket } from './ticket';
import { HttpObserve } from '@angular/common/http/src/client';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class TicketService {
    constructor(private _http: HttpClient) {
    }
    getResponse(ticketCode: string, ticketDays: string): Observable<Iticket[]> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8; ieee754compatible=false; odata.metadata=none; odata.streaming=false',
                'Access-Control-Allow-Origin': '*',
                //'User-Agent': 'Awesome-Octocat-App',
                'x-api-key': 'wddlt8hjvve2d0651tomkth00lbyusx4fm16llus',
                //'X-Host-Override': 'api.github.com',
                'Access-Control-Expose-Headers': 'Retry-After,Age,WWW-Authenticate',
                'X-Host-Override': 'api.applicationinsights.io',
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
                //'Content-Length': '367'
            }),
            params: new HttpParams,
            reportProgress:false,
            responseType: 'text' as 'json',
            withCredentials: false
          };
        // let ticketUrl = 'https://api.applicationinsights.io/v1/apps/8763ef7e-9626-4502-9daf-fdb7e6e3564c/events/exceptions?$search=' + ticketCode;
        let ticketUrl = "https://api.applicationinsights.io/v1/apps/8763ef7e-9626-4502-9daf-fdb7e6e3564c/events/$all?$filter=timestamp%20gt%20now()%20sub%20duration'P"+ticketDays+"D'&$search=" + ticketCode;
        //let ticketUrl = 'https://api.applicationinsights.io/v1/apps/8763ef7e-9626-4502-9daf-fdb7e6e3564c/events/exceptions?$search=b02e0d26-b112-4389-9e3d-a4ddec1183ac';
        //let ticketUrl = 'https://api.github.com/users/AlbertOliva';
        console.log("GET WITH HEADERS " + options + ' and with ticket number ' + ticketUrl + ' and the ticketCode is ' + ticketCode);
        return this._http.get<Iticket[]>(ticketUrl, options)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse) {
        (err != undefined) ? console.log('error indefinido') : console.log(err.message);
        return Observable.throw(err.message);
    }
}