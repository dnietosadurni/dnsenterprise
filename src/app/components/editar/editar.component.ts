import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProveedoresService } from '../../services/proveedores.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  articulo;

  articulos;

  listaProveedores;

  indice;

  constructor( private _articulosService: ArticulosService,
               private _activatedRoute: ActivatedRoute,
               private _proveedoresService: ProveedoresService,
               private _router: Router) {

    this.articulos = _articulosService.cargarArticulosLocalStorage();

    this.listaProveedores = _proveedoresService.cargarProveedoresLocalStorage();

   }

   ngOnInit() {
    const codigo = this._activatedRoute.snapshot.params.codigo;
    this.articulo = this.articulos.find( art => art.codigo === codigo);
    this.indice = this.articulos.findIndex( art => art.codigo === codigo);

  }

  guardarArticulo( articuloModificado: NgForm) {
    this._articulosService.guardarArticulosLocalStorage(this.articulos);
    this._router.navigate(['/articulos']);

  }

  eliminarArticulo() {
    this._articulosService.eliminarArticuloLocalStorage( this.indice, this.articulos);
    this._router.navigate(['/articulos']);
    
  }



 

}
