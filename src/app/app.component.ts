import { Component } from "@angular/core";
import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <nav class='navbar navbar-default'>
  <div class='container-fluid'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav navbar-nav'>
  <!--li><a [routerLink]="['/welcome']">Home</a></li-->
  <!--li><a [routerLink]="['/products']">Product List</a></li-->
  <li><a [routerLink]="['/login']">Login</a></li>
  <li><a [routerLink]="['/ticket']">Consultar ticket</a></li>
  <li><a [routerLink]="['/listado-camiones']">Listado de camiones</a></li>
  <li><a [routerLink]="['/consejos']">Consejos</a></li>
  </ul>
  </div>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  </div>
  `,
  providers:[ ProductService ]
})
export class AppComponent {
  pageTitle: string = 'Menú ->'
  environtments = ["DEV1", "PRODUCCIÓN"];
}