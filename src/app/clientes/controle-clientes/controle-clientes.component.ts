import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-controle-clientes',
  templateUrl: './controle-clientes.component.html',
  styleUrls: ['./controle-clientes.component.css'],
  providers: [DatePipe]
})
export class ControleClientesComponent implements OnInit {

  pathFotos: string = environment.pathFotos;

  cliente: Cliente;
  id?: number;
  operacao: string;
  novoId: number;
  data = new Date();
  hoje: string;
  descrBotao: string = "Salvar Registro";

  

  formCliente: FormGroup;  

  constructor(
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private service: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { 
      let data = this.datePipe.transform(this.data, 'dd/MM/yyyy');
      this.hoje = data;
      this.cliente = new Cliente();
  }

  ngOnInit(): void {       

    this.preparaFormulario();

    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      this.operacao = urlParams['operacao'];

      if(this.operacao == 'editar') {
        this.descrBotao = 'Salvar Alterações';
      } else if (this.operacao == 'excluir') {
        this.descrBotao = 'Excluir Registro';
      } else {
        this.descrBotao = 'Salvar Registro';
      }

      if (this.id) {
        this.cliente = this.service.clienteById(+this.activatedRoute.snapshot.paramMap.get('id'));
      }
    })
  }

  preparaFormulario() {
    this.formCliente = this.fb.group({
      cliente: ['', [Validators.required, Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      emailSecundario: ['', Validators.required],
      celular: ['', Validators.required],
      foto: ['']
    });
  }

  submit() : void {
    console.log(this.id);
    console.log(this.cliente);

    if (this.operacao=='excluir') {
      this.service
        .excluir(this.cliente);
    } else {
      if (this.id) {
        console.log('chamada para update');
      } else {
        this.cliente.id = this.service.gerarNovoId();
        this.cliente.dataCadastro = this.hoje;
  
        this.service.salvar(this.cliente);
        this.snackBar.open('Registro Salvo com Sucesso!', 'Sucesso', {
          duration: 3000
        });    
  
      }
    }
    this.router.navigate(['/lista-clientes']);
  }

  selecionarFoto(event) {
    const arq = event.target.files;
    if (arq) {
      const foto = arq[0];
      this.cliente.foto = foto.name;
      console.log(foto.name);
    }
  }

}
