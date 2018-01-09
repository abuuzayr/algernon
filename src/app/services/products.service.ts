import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  route: string;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(p =>
      this.route = p.id);
  }

}
