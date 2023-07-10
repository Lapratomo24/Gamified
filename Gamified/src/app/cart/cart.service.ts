import { Injectable } from '@angular/core';
import { Game } from '../interfaces/Game';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Array<Game> = [];

  addGameToCart(game: Game) {
    console.log(game);
    this.cart.push(game);
  }

  removeGameFromCart(game: Game) {
    this.cart = this.cart.filter((g) => g !== game);
  }
}
