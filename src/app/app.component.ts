import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marcas-store';

  items = ['Marcia', 'Samir', 'Adrián', 'Gerónimo'];

  power = 10;

  

  addItem() {
    this.items.push('nuevo item'); 
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

 
}
