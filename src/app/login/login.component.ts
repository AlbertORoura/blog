import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tocken:string;
  entornos:string;
  email:string;
  passwordEncripted:string;
  private _urlAPI = '';

  // constructor(private _http: HttpClient) { }
  constructor() { }
  
  //GetToken(entornos: string,email:string,passwordEncripted: string): Observable<any> {
    GetToken(entornos: string,email:string,passwordEncripted: string) {
    //return this.tocken = this._http.get(this._urlAPI);
    return this.tocken = 'Token';
  }
  ngOnInit() {
  }

  onKey(event:any){
    this.passwordEncripted = btoa(event.target.value); // encode a string
  }
}
