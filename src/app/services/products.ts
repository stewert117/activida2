import { Injectable } from '@angular/core';


export interface Product {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})


export class Products {

  private products: Product[] = [ {
    id: 1,
    nombre: 'honda tansa tc',
    descripcion: 'ideal para la ciudad',
    precio: 10.99,
    imagen: '/img/halo.png'

  },
  {
    id: 2,
    nombre: 'honda tansa tc',
    descripcion: '',
    precio: 10.99,
    imagen: '/img/halo.png'


  },
  {    id: 3,
    nombre: 'honda tansa tc',
    descripcion: '',
    precio: 10.99,
    imagen: '/img/halo.png'
  }

  ]
  constructor() { }
  getAllProducts(): Product[] {
    return this.products;
  }
}
