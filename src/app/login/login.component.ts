import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

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
  myDate: any = new Date().toLocaleString();

    //constructor(private _loginService: LoginService) { }
   constructor() { }
  
  //GetToken(entornos: string,email:string,passwordEncripted: string): Observable<any> {
  GetToken(entornos: string,email:string,passwordEncripted: string) {
    //return this.tocken = this._http.get(this._urlAPI).subscribe(data => {console.log(data)});
    return this.tocken = 'Token';
  }
  ngOnInit() {
    this.utcTime();
  }

  utcTime(): void {
      setInterval(() => {
          this.myDate = new Date();
          console.log(this.myDate); // just testing if it is working
      }, 1000);
  }

  onKey(event:any){
    this.passwordEncripted = btoa(event.target.value); // encode a string
  }
}
