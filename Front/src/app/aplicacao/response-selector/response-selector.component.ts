import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Resposta } from 'src/model/resposta.model';
import { ChatComponent } from '../chat/chat.component';
@Component({
  selector: 'app-response-selector',
  templateUrl: './response-selector.component.html',
  styleUrls: ['./response-selector.component.css'],
})
export class ResponseSelectorComponent implements OnInit {
 
  constructor() {}
  @Input() respostas: Array<Resposta>;
  @Input() id_questao: string;
  @Input() data: string;
  @Input() chat: ChatComponent;

  ngOnInit(): void {}

  responder(resposta: Resposta) {
    this.chat.responder(resposta, this.id_questao);
  }
}
