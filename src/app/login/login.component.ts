import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  values = '';
  passwordEncripted:string;
  _password: string;
  get password(): string {
      return this._password;
  }
  set password(value:string) {
    this._password = value;
    //this.filteredProducts = this.password ? this.performFilter(this.password) : this.products;
  }
  
  constructor() { }
  
  GetToken(passwordEncripted): string {
    return this.passwordEncripted;
  }
  ngOnInit() {
  }

  onKey(event:any){
    this.passwordEncripted = btoa(event.target.value); // encode a string
  }
}
