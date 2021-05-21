import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { LayoutComponent } from './template/layout/layout.component';
import { ControleClientesComponent } from './clientes/controle-clientes/controle-clientes.component';
import { ListagemClientesComponent } from './clientes/listagem-clientes/listagem-clientes.component';

@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
    LayoutComponent,
    ControleClientesComponent,
    ListagemClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    ControleClientesComponent,
    ListagemClientesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
