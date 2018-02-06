import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }
  
  GetToken(entornos: string,email:string,passwordEncripted: string) {
    return this.tocken = 'tocken';
  }
  ngOnInit() {
  }

  onKey(event:any){
    this.passwordEncripted = btoa(event.target.value); // encode a string
  }
}
