import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
  private productUrl = './api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // getProduct(id: number): IProduct {
  //   return this.http
  //     .get<IProduct[]>(this.productUrl).pipe();

  //   // return this.http.get<IProduct>(`${this.productUrl}/${id}`);
  //   // return products[id];
  // }
}
