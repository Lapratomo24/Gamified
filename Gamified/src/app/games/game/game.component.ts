import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../interfaces/Game';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game = {} as Game;
  // @Output() gameEmitter = new EventEmitter<Game>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    // this.gameEmitter.emit(this.game);
    this.cartService.addGameToCart(this.game);
  }
}
