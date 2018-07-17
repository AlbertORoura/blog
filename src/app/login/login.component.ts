import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

<<<<<<< HEAD
import { IItems } from './items';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
// for auth    
import { AngularFireAuthModule } from 'angularfire2/auth';
// for Observables
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
//import { AngularFireDatabase } from 'angularfire2/database-deprecated';

=======
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
    tocken: string;
  entornos: string;
  email: string;
  passwordEncripted: string;
  private _urlAPI = '';
  myDate: any = new Date();
  //items: FirebaseListObservable<any[]>;
  //items: Observable<any[]>;
  items: Observable<IItems[]>;
  itemsRef: AngularFireList<{}>;

  // constructor(database: AngularFireDatabase) {
  //   this.items = database.list<IItems>('items').valueChanges();
  //   database.list<IItems>('items').push({ value: 'Items 4' });
  //   database.list('items').set('4','Item 4');
  //   console.log(this.items);
  // }

  constructor(database: AngularFireDatabase) {    
    this.itemsRef = database.list('Camiones');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  //GetToken(entornos: string,email:string,passwordEncripted: string): Observable<any> {
  GetToken(entornos: string, email: string, passwordEncripted: string) {
=======
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
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
    //return this.tocken = this._http.get(this._urlAPI).subscribe(data => {console.log(data)});
    return this.tocken = 'Token';
  }
  ngOnInit() {
    this.utcTime();
<<<<<<< HEAD
    this.convertDate(this.myDate);
  }

  convertDate(my2Date) {
    let dateArray = my2Date.toLocaleString().split("/");
    let newDate = dateArray[0] + "-" + dateArray[1] + "-" + dateArray[2];
    return newDate;
  }

  utcTime(): void {
    setInterval(() => {
      this.myDate = new Date();
      this.convertDate(new Date());
      //console.log(this.myDate); // just testing if it is working
    }, 1000);
  }

  onKey(event: any) {
=======
  }

  utcTime(): void {
      setInterval(() => {
          this.myDate = new Date();
          console.log(this.myDate); // just testing if it is working
      }, 1000);
  }

  onKey(event:any){
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
    this.passwordEncripted = btoa(event.target.value); // encode a string
  }
}
