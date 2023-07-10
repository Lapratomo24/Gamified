import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  showGames() {
    return [
      {
        title: 'Assassin\'s Creed Valhalla',
        developer: 'Ubisoft Montreal',
        price: 59.99,
        img: 'https://m.media-amazon.com/images/I/81AP5yA1beL.jpg'
      },
      {
        title: 'Hozizon Forbidden West',
        developer: 'Guerrilla Games',
        price: 49.99,
        img: 'https://m.media-amazon.com/images/I/81bkg8-SW5L._AC_UF1000,1000_QL80_.jpg'
      },
      {
        title: 'God of War Ragnarok',
        developer: 'Santa Monica Studio',
        price: 59.99,
        img: 'https://m.media-amazon.com/images/I/81meB6bqrTL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        title: 'Final Fantasy 16',
        developer: 'Square Enix',
        price: 69.99,
        img: 'https://i.ebayimg.com/images/g/OEgAAOSwWP9kbN5G/s-l1200.webp'
      }
    ]
  }
}
