import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {

  @Input() proveedor;
  @Input() i;
  @Input() proveedores: any = [];

  @Output() isShowingModalEditar: EventEmitter<boolean>;

  showingModalEditar;

  indice;

  usuario;




  constructor( private _proveedoresService: ProveedoresService) {
    this.isShowingModalEditar = new EventEmitter();


   }

  ngOnInit() {
    this.usuario = this.proveedor;
    this.indice = this.i;

  }

  onClickOnCerrar() {
    this.showingModalEditar = false;
    this.isShowingModalEditar.emit( this.showingModalEditar );
  }

  guardarSinModificar() {
    this.proveedores = this._proveedoresService.cargarProveedoresLocalStorage();
    this.onClickOnCerrar();
  }

  eliminarProveedor() {

    this.proveedores.splice( this.indice, 1);
    this._proveedoresService.eliminarProveedorLocalStorage( this.proveedores );
    this.onClickOnCerrar();

  }

  guardarProveedorModificado(formularioProveedor: NgForm) {
    this.proveedores.splice(this.indice, 1);
    this._proveedoresService.eliminarProveedorLocalStorage( this.proveedores );
    this.proveedores = this._proveedoresService.guardarProveedorLocalStorage( formularioProveedor.value );
    this.usuarioEnBlanco();
    this.onClickOnCerrar();

}

usuarioEnBlanco() {
  this.usuario = {
    codigo: null,
    nombre: null,
    pais: null,
    correo: null
  };

}

}
