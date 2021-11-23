import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Camiseta de color azul manga corta con diseños variados'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'Saco manga larga con capucha color azul de algodón'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'Mug de una oreja, color blanco con diferentes mensajes'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'Pin para ropa con logo personalizado'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'Sticker 5cm x 2cm con logo a su gusto'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'Sticker 5cm x 10cm con logo a su gusto'
    },
  ];

  constructor() {
    //
  }

  getAllProducts() {
    return this.products; 
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
