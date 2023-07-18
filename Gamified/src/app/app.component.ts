import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Gamified';

  constructor(private cartService: CartService) {};

  ngOnInit(): void {

  }

  cartAmount() {
    return this.cartService.cart.length;
  }
}
