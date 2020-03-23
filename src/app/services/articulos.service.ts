import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  listaArticulos;

  constructor() { }

  cargarArticulosLocalStorage() {
    if(JSON.parse(localStorage.getItem('articulosDNS'))) {
      this.listaArticulos = JSON.parse(localStorage.getItem('articulosDNS'));
    } else {
      this.listaArticulos = [];
    }
    return this.listaArticulos;
  }

  guardarArticulosLocalStorage( nuevaLista) {
    this.listaArticulos = nuevaLista;
    this.ordenarArticulos();
    localStorage.setItem('articulosDNS', JSON.stringify( this.listaArticulos) );
  }

  ordenarArticulos() {
    let provisionalArticulos = this.listaArticulos;
    provisionalArticulos.sort( function(a,b) {
      return (a.codigo - b.codigo);
    });
    this.listaArticulos = provisionalArticulos;
    return this.listaArticulos;
  }

  eliminarArticuloLocalStorage( indice: number, articulos ) {
    articulos.splice( indice, 1);
    this.guardarArticulosLocalStorage(articulos);

  }
  

  


}


