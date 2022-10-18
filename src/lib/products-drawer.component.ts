import { Component, Input, OnInit } from '@angular/core';
import { ProductsDrawerService } from './products-drawer.service';
@Component({
  selector: 'products-drawer',
  templateUrl: `products-drawer.component.html`,
  styleUrls: ['products-drawer.component.scss']
})
export class ProductsDrawerComponent implements OnInit {
  @Input() data;
  constructor(private serv: ProductsDrawerService) { }

  ngOnInit(): void {

  }
  addToWishlist(j) {
    this.serv.addToWishlist(this.data.wishlistApi + this.data.info[j].key)
    this.data.info[j].wishlist = !this.data.info[j].wishlist;
  }

  open(url) {
    window.open(url)
  }

}
