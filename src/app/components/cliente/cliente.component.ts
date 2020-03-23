import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  cliente = new ClienteModel();

  constructor(private _router: Router,
    private _clientesService: ClientesService,
    private _activatedRoute: ActivatedRoute
   ) { }

  ngOnInit() {
    const codigo = this._activatedRoute.snapshot.params.codigo;

    if (codigo !== 'nuevo') {
      this._clientesService.getCliente(codigo).subscribe((resp: ClienteModel) => {
        this.cliente = resp;
        this.cliente.codigo = codigo;
      });
    }
  }

  guardarCliente(form: NgForm) {

    if (form.invalid) {
      console.log('Formulario no valido');
      return;
    }

   Swal.fire({
      title: 'Espere',
      text: 'Guardando cliente',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    
    let peticion: Observable<any>;

    if (this.cliente.codigo) {

      peticion = this._clientesService.actualizarCliente(this.cliente);
    } else {

      peticion = this._clientesService.crearCliente(this.cliente);
    }

    peticion.subscribe(resp => {

      Swal.fire({
        title: this.cliente.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    
      this._router.navigate(['/clientes']);

    });


  }

  eliminarCliente(cliente: ClienteModel) {

    this._clientesService.eliminarCliente(cliente.codigo).subscribe( resp => {

      Swal.fire({
        title: this.cliente.nombre,
        text: 'Se eliminó correctamente',
        icon: 'success'
      });
  
      this._router.navigate(['/clientes']);
  
    });


  }

}
