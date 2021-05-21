import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    cli: Cliente;
    novaLista: Cliente[];

    constructor() { }

    listagemGeral() {
        return clientes;
    }

    clienteById(id: number) : Cliente {        
        return clientes.find((clienteInterator: Cliente) => clienteInterator.id === id);
    }

    salvar(cliente: Cliente): number {
        return clientes.push(cliente);
    }

    gerarNovoId(): number {
        return clientes.length + 1;
    }

    excluir(cliente: Cliente) {
        const index = clientes.indexOf(cliente);
        console.log(index);
        if(index !== -1) {
            clientes.splice(index, 1);
            this.novaLista = clientes;
            console.log(clientes);
            clientes = this.novaLista;            
        } 
    }

}

var clientes: Cliente[] = [
    {
        foto: '1.jpg',
        id: 1,
        cliente: 'Ezequiel Henrique Campana',
        email: 'ezequiel.henrique@gmail.com',
        emailSecundario: 'ezequiel.henrique@uol.com.br',
        dataCadastro: '20/04/2021',
        celular: '16997955097'
    },
    {
        foto: '2.jpg',
        id: 2,
        cliente: 'Zildomar Merphils',
        email: 'zildomar@gmail.com',
        emailSecundario: 'zildo-marphils@uol.com.br',
        dataCadastro: '19/04/2021',
        celular: '16981140078'
    },
    {
        foto: '3.jpg',
        id: 3,
        cliente: 'Riodowal Lorges',
        email: 'riodowal@gmail.com',
        emailSecundario: 'riodo-lorges@uol.com.br',
        dataCadastro: '21/04/2021',
        celular: '16998500225'
    }
];