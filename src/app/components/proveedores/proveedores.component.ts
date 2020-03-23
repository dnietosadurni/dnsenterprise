import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';

export interface Proveedores {
  codigo: string;
  nombre: string;
  pais: string;
  correo: string;
}


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {


  isShowingModal = false;
  isShowingModalEditar = false;

  usuario = {
    codigo: null,
    nombre: null,
    pais: null,
    correo: null
  };

  proveedores: Proveedores [] = [];


  indice;


  constructor( private _servicio: ProveedoresService) {
  this.proveedores = this._servicio.cargarProveedoresLocalStorage();
   }

  ngOnInit() {
  }

//guardarProveedor( formularioProveedor: NgForm) {
//  this.proveedores = this._servicio.guardarProveedorLocalStorage( formularioProveedor.value );
//  this.usuarioEnBlanco();
 // this.onClickOnCerrar( this.isShowingModal );
//}

//guardarProveedorModificado(formularioProveedor: NgForm) {
//    this.proveedores.splice(this.indice, 1);
//    this._servicio.eliminarProveedorLocalStorage( this.proveedores );
// /  this.proveedores = this._servicio.guardarProveedorLocalStorage( formularioProveedor.value );
 //   this.usuarioEnBlanco();

//}

guardarSinModificar() {

  console.log("guardar sin modificar ");
  this.proveedores = this._servicio.cargarProveedoresLocalStorage();

}

escogerProveedor( proveedor, i ) {

  this.indice = i;
  this.usuario = proveedor;
  this.isShowingModalEditar = true;

}

eliminarProveedor() {

  this.proveedores.splice( this.indice, 1);
  this._servicio.eliminarProveedorLocalStorage( this.proveedores );

}


usuarioEnBlanco() {

  this.usuario = {
    codigo: null,
    nombre: null,
    pais: null,
    correo: null
    
  };

}

abrirModal() {

  this.isShowingModal = true;

}


onClickOnAlta() {
  
  this.usuarioEnBlanco();
  this.abrirModal();

}

onClickOnCerrar( showingModal ) {

  this.isShowingModal = showingModal;
  this.proveedores = this._servicio.cargarProveedoresLocalStorage();

}

onClickOnCerrarEditar( showingModalEditar ) {

  this.isShowingModalEditar = showingModalEditar;
  this.proveedores = this._servicio.cargarProveedoresLocalStorage();

}


}
