import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {

  pathFotos: string = environment.pathFotos;

  listaClientes: Cliente[] = [];
  colunas = ['foto', 'cliente', 'email', 'emailSecundario', 'dataCadastro', 'celular', 'btnEditar', 'btnExcluir'];

  constructor( 
    private router: Router,
    private service: ClienteService,
  ) { }

  ngOnInit(): void {
    this.listaClientes = this.service.listagemGeral();
  }

  cadastrarCliente() {
    this.router.navigate(['/cad-cliente']);
  }

  excluir(cliente: Cliente) {
    this.service.excluir(cliente);
    this.ngOnInit;
  }

}
