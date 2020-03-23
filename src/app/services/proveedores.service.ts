import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {


  listaProveedores = [];

  constructor() { }

  cargarProveedoresLocalStorage() {
    if (JSON.parse(localStorage.getItem('proveedoresDNS'))) {
      this.listaProveedores = JSON.parse(localStorage.getItem('proveedoresDNS'));
    } else {
      this.listaProveedores = [];
    }
    return this.listaProveedores;
  }

  guardarProveedorLocalStorage( nuevoProveedor ) {
    this.cargarProveedoresLocalStorage();
    this.listaProveedores.push( nuevoProveedor);
    this.ordenarProveedores();
    localStorage.setItem('proveedoresDNS', JSON.stringify(this.listaProveedores));

    return this.listaProveedores;
    
  }

  eliminarProveedorLocalStorage( proveedores ) {
    proveedores = this.listaProveedores;
    this.ordenarProveedores();
    localStorage.setItem('proveedoresDNS', JSON.stringify(this.listaProveedores));

    return this.listaProveedores;
  }

  ordenarProveedores() {
    let proveedoresProvisional = this.listaProveedores;
    proveedoresProvisional.sort( function(a,b) {
      return (a.codigo - b.codigo);
    });
  }
  
}

