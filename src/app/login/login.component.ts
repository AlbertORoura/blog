import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password2:string;
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
  
  GetToken(password2): string {
    return this.passwordEncripted = btoa(this.password2); // encode a string    
  }
  ngOnInit() {
  }

}
