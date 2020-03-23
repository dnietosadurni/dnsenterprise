import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { ClienteModel } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ClienteModel[] = [];

  cargando = false;

  constructor( private _clientesService: ClientesService) { }

  ngOnInit() {
    this.cargando = true;
    this._clientesService.getClientes().subscribe( resp => {
      this.clientes = resp;
      this.cargando = false;
    }  );
   
  }

}
