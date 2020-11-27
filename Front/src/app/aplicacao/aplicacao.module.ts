import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { ChatComponent } from './chat/chat.component';
import { MsgUserComponent } from './msg-user/msg-user.component';
import { MsgBotComponent } from './msg-bot/msg-bot.component';

@NgModule({
  declarations: [LoginComponent, CursosComponent, CursoComponent, ChatComponent, MsgUserComponent, MsgBotComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    MsgBotComponent,
    MsgUserComponent
  ]
})
export class AplicacaoModule { }
