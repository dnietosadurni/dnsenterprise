import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from '../../services/proveedores.service';
import { ArticulosService } from '../../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {

  isShowingModal = false;

  articulo = {
    codigo: null,
    modelo: null,
    tipo: null,
    marca: null,
    anio: null
  };

  listaProveedores = [];
  listaArticulos;

  constructor( private _proveedoresService: ProveedoresService,
               private _articulosService: ArticulosService,
               private _router: Router) {
    this.listaProveedores = _proveedoresService.cargarProveedoresLocalStorage();
  }

  ngOnInit() {
  }

  guardarArticulo( nuevoArticulo: NgForm ) {
    this.listaArticulos = this._articulosService.cargarArticulosLocalStorage();
    this.listaArticulos.push(nuevoArticulo.value);
    this._articulosService.guardarArticulosLocalStorage( this.listaArticulos );
    this._router.navigate(['/articulos']);
  }


}
