import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDrawerService {
  constructor(private http: HttpClient) { }
  addToWishlist(url) {
    return this.http.get(url)
  }
}
