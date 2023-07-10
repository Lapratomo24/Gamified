import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../interfaces/Game';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game = {} as Game;
  // @Output() gameEmitter = new EventEmitter<Game>();
  isAdded: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.isAdded = true;
    // this.gameEmitter.emit(this.game);
    this.cartService.addGameToCart(this.game);
  }

  removeFromCart() {
    this.isAdded = false;
    this.cartService.removeGameFromCart(this.game);
  }
}
