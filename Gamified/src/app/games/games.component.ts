import { GamesService } from './games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../interfaces/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor(private gamesService: GamesService) {
    // this.games = this.gamesService.showGames();
  }

  games: Array<Game> = [];

  isDisabled: boolean = false;
  isShowing: boolean = true;

  // cart: Game[] = [];

  ngOnInit(): void {
    this.games = this.gamesService.showGames();
  }

  clickHandler() {
    this.isDisabled = !this.isDisabled;
  }

  name: string = '';
  inputHandler(e: any) {
    this.name = e.target.value;
  }

  toggler() {
    this.isShowing = !this.isShowing;
  }

  // addToCart(game: Game) {
  //   console.log(game);
  // }
}
