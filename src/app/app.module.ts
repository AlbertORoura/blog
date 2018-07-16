import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CollapsibleModule } from 'angular2-collapsible';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './ticket/ticket.component';
import { ListadoCamionesComponent } from './listado-camiones/listado-camiones.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { ProductService } from './products/product.service';
import { TicketService } from './ticket/ticket.service';
import { LoginService } from './login/login.service';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    LoginComponent,
    TicketComponent,
    ListadoCamionesComponent,
    ConsejosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CollapsibleModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'listado-camiones', component: ListadoCamionesComponent },
      { path: 'consejos', component: ConsejosComponent },
      { path: 'ticket', component: TicketComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'ticket', pathMatch: 'full' },
      { path: '**', redirectTo: 'ticket', pathMatch: 'full' }
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ProductService, TicketService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
