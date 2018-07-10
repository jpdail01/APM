import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from '../../../node_modules/rxjs/Subscription';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  productSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log(this.route.snapshot);
    this.pageTitle += `: ${id}`;
    // this.productSubscription = this.productService.getProduct(id).subscribe(
    //   product => {
    //     this.product = product;
    //   },
    //   () => {}, // error
    //   () => {} // complete
    // );

    // this.product = this.productService.getProduct(id);
    this.product = {
      productId: id,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
