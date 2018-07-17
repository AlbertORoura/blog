import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
=======
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CollapsibleModule } from 'angular2-collapsible';
=======
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './ticket/ticket.component';
<<<<<<< HEAD
import { ListadoCamionesComponent } from './listado-camiones/listado-camiones.component';
import { ConsejosComponent } from './consejos/consejos.component';
=======
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
import { ProductService } from './products/product.service';
import { TicketService } from './ticket/ticket.service';
import { LoginService } from './login/login.service';

<<<<<<< HEAD
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';



=======
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    LoginComponent,
<<<<<<< HEAD
    TicketComponent,
    ListadoCamionesComponent,
    ConsejosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CollapsibleModule,
=======
    TicketComponent
  ],
  imports: [
    BrowserModule,
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'login', component: LoginComponent },
<<<<<<< HEAD
      { path: 'listado-camiones', component: ListadoCamionesComponent },
      { path: 'consejos', component: ConsejosComponent },
=======
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
      { path: 'ticket', component: TicketComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'ticket', pathMatch: 'full' },
      { path: '**', redirectTo: 'ticket', pathMatch: 'full' }
<<<<<<< HEAD
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
=======
    ])
>>>>>>> f4524b295c26a23587315343550680a9dc5937aa
  ],
  providers: [ProductService, TicketService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
