import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  showGames() {
    return [
      {
        title: 'Assassin\'s Creed Mirage',
        developer: 'Ubisoft Montreal',
        price: 59.99,
        img: 'https://m.media-amazon.com/images/I/81AP5yA1beL.jpg'
      },
      {
        title: 'Horizon Forbidden West',
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
      },
      {
        title: 'Devil May Cry 5',
        developer: 'Capcom',
        price: 39.99,
        img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106077090'
      },
      {
        title: 'Lies of P',
        developer: 'Neowiz',
        price: 69.99,
        img: 'https://m.media-amazon.com/images/I/81Riu1D4HkL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        title: 'Atomic Heart',
        developer: 'Mundfish',
        price: 59.99,
        img: 'https://i.ebayimg.com/images/g/c0QAAOSw94Fj24ge/s-l1600.png'
      },
      {
        title: 'Spider-Man 2',
        developer: 'Insomniac',
        price: 79.99,
        img: 'https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg'
      }
    ]
  }
}
