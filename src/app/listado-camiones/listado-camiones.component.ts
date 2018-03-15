import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IItems } from './items';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
// for auth    
import { AngularFireAuthModule } from 'angularfire2/auth';
// for Observables
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
//import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'pm-listado-camiones',
  templateUrl: './listado-camiones.component.html',
  styleUrls: ['./listado-camiones.component.css']
})
export class ListadoCamionesComponent implements OnInit {
  entornos: string;
  items: Observable<IItems[]>;
  itemsRef: AngularFireList<{}>;
  // constructor() { }

  constructor(database: AngularFireDatabase) {    
    this.itemsRef = database.list('Camiones');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
  }

}
