import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControleClientesComponent } from './clientes/controle-clientes/controle-clientes.component';
import { ListagemClientesComponent } from './clientes/listagem-clientes/listagem-clientes.component';

const routes: Routes = [
  { path: '', component: ListagemClientesComponent },
  { path: 'lista-clientes', component: ListagemClientesComponent },
  { path: 'cad-cliente', component: ControleClientesComponent },
  { path: 'cad-cliente/:id/:operacao', component: ControleClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
