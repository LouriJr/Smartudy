import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [LoginComponent, CursosComponent, CursoComponent],
  imports: [
    CommonModule
  ]
})
export class AplicacaoModule { }
