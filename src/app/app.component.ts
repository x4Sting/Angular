import { Component } from '@angular/core';

class Item {
  id: number;
  purchase: string;
  done: boolean;
  price: number;

  constructor( purchase: string, price: number, id: number) {
    this.id = id;
    this.purchase = purchase;
    this.done = false;
    this.price = price;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';

  constructor() {
  }

  items: Item[] = [
    { id:1, purchase: 'Хлеб', done: false, price: 15},
    { id:2, purchase: 'Батон', done: false, price: 12},
    { id:3, purchase: 'Масло', done: true, price: 27},
    { id:4, purchase: 'Икра', done: false, price: 60},
  ]
}
