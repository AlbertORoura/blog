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
import { Entornos } from './environtment.model';

@Injectable()
export class TicketService {
    constructor(private _http: HttpClient) {
    }
    urlAplication: string = 'https://api.applicationinsights.io/v1/apps/';
    urlFilter: string = "/events/$all?$filter=timestamp%20gt%20now()%20sub%20duration'P";
    getResponse(ticketCode: string, ticketDays: string, entornos: string): Observable<Iticket[]> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8; ieee754compatible=false; odata.metadata=none; odata.streaming=false',
                'Access-Control-Allow-Origin': '*',
                // 'User-Agent': 'Awesome-Octocat-App',
                'x-api-key': 'wddlt8hjvve2d0651tomkth00lbyusx4fm16llus',
                // 'X-Host-Override': 'api.github.com',
                'Access-Control-Expose-Headers': 'Retry-After,Age,WWW-Authenticate',
                'X-Host-Override': 'api.applicationinsights.io',
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
                // 'Content-Length': '367'
            }),
            params: new HttpParams,
            reportProgress: false,
            responseType: 'text' as 'json',
            withCredentials: false
          };

        const ticketUrl = this.urlAplication + entornos + this.urlFilter + ticketDays + "D'&$search=" + ticketCode;
        // console.log('HEADERS ' + options + ' ticket url ' + ticketUrl + ' ticketCode ' + ticketCode + ' key ' + entornos);
        return this._http.get<Iticket[]>(ticketUrl, options)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse) {
        (err !== undefined) ? console.log('error indefinido') : console.log(err.message);
        return Observable.throw(err.message);
    }
}
