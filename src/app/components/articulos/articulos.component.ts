import { Component, OnInit, Input } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styles: []
})
export class ArticulosComponent implements OnInit {

  clave = false;

  articulo;

  articulos = [];

  constructor( private _articulosService: ArticulosService ){
    this.articulos = this._articulosService.cargarArticulosLocalStorage();
   }

  ngOnInit() {}
  


}
