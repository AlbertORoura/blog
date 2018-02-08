import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { HttpObserve } from '@angular/common/http/src/client';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private _http: HttpClient) {
    }
}