import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './institutional/home/home.component';
import { LoginComponent } from './aplicacao/login/login.component';
import { CursosComponent } from './aplicacao/cursos/cursos.component';
import { CursoComponent } from './aplicacao/curso/curso.component';
import { ChatComponent } from './aplicacao/chat/chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'chat', component: ChatComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
