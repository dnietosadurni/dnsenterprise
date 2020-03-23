import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-alta',
  templateUrl: './modal-alta.component.html',
  styleUrls: ['./modal-alta.component.css']
})
export class ModalAltaComponent implements OnInit {

  @Output() isShowingModal: EventEmitter<boolean>;

  showingModal;

  usuario = {
    codigo: null,
    nombre: null,
    pais: null,
    correo: null
  };

  proveedores: any = [];

  indice;


  constructor(private _servicio: ProveedoresService) {
    this.isShowingModal = new EventEmitter();
    this.proveedores = this._servicio.cargarProveedoresLocalStorage();

  }

  ngOnInit() {
  }

  guardarProveedor(formularioProveedor: NgForm) {
    this.proveedores = this._servicio.guardarProveedorLocalStorage(formularioProveedor.value);
    this.usuarioEnBlanco();
    this.onClickOnCerrar();
  }

  guardarProveedorModificado(formularioProveedor: NgForm) {
    this.proveedores.splice(this.indice, 1);
    this._servicio.eliminarProveedorLocalStorage(this.proveedores);
    this.proveedores = this._servicio.guardarProveedorLocalStorage(formularioProveedor.value);
    this.usuarioEnBlanco();
  }

  escogerProveedor(proveedor, i) {
    this.indice = i;
    this.usuario = proveedor;
  }

  usuarioEnBlanco() {
    this.usuario = {
      codigo: null,
      nombre: null,
      pais: null,
      correo: null
    };

  }

  onClickOnCerrar() {
    this.showingModal = false;
    this.isShowingModal.emit(this.showingModal);
  }

}
