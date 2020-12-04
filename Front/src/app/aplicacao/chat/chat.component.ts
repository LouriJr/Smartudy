import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  SecurityContext,
} from '@angular/core';
import { DataService } from '../../data.service';
import { HttpHeaders } from '@angular/common/http';
import { Questao } from '../../../model/questao.model';
import {
  ViewChild,
  ComponentFactoryResolver,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { MsgBotComponent } from '../msg-bot/msg-bot.component';
import { MsgUserComponent } from '../msg-user/msg-user.component';
import { ResponseSelectorComponent } from '../response-selector/response-selector.component';
import { Resposta } from 'src/model/resposta.model';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import * as moment from 'moment';

declare var $: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, AfterViewInit {
  components = [];
  mensagemAtual: string;

  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;
  constructor(
    private dataService: DataService,
    private _resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.scrollToRoot(1500);
  }

  async ngAfterViewInit() {
    var questao = await this.BuscarQuestaoAtual();
    this.adicionarMensagemBot(questao);
  }

  scrollToRoot(time: number) {
    $('#chat-box').animate({ scrollTop: $('#chat-box')[0].scrollHeight }, time);
  }

  async BuscarQuestaoAtual(): Promise<Questao> {
    var response = await this.dataService.RetornarQuestaoAtual();
    return this.ConverterRespostaParaQuestao(response);
  }

  ConverterRespostaParaQuestao(response: any): Questao {
    var questao = new Questao();
    questao.id_questao = response.Questao.id_questao;
    questao.texto_questao = response.Questao.texto_questao;
    questao.texto_professor = response.Questao.texto_professor;
    questao.respostas = response.Resposta;
    questao.data = this.criarDataMensagem();

    this.setMensagemAtual(questao);

    return questao;
  }

  adicionarMensagemBot(questao: Questao) {
    const factory = this._resolver.resolveComponentFactory(MsgBotComponent);

    var component = this.entry.createComponent(factory);
    component.instance.questao = questao;
    this.components.push(component);

    this.adicionarResponseSelector(questao);
  }

  adicionarResponseSelector(questao: Questao) {
    const factory = this._resolver.resolveComponentFactory(
      ResponseSelectorComponent
    );

    var component = this.entry.createComponent(factory);
    component.instance.respostas = questao.respostas;
    component.instance.id_questao = questao.id_questao;
    component.instance.chat = this;
    component.instance.data = this.criarDataMensagem();

    this.components.push(component);
  }

  async adicionarResposta(resposta: Resposta, id_questao: string) {
    const factory = this._resolver.resolveComponentFactory(MsgUserComponent);

    var component = this.entry.createComponent(factory);
    component.instance.resposta = resposta;

    this.components.push(component);

    resposta.data = this.criarDataMensagem();

    var proximaQuestao = await this.dataService.ResponderQuestao(
      resposta,
      id_questao
    );

    var questao = this.ConverterRespostaParaQuestao(proximaQuestao);

    this.adicionarMensagemBot(questao);

    this.scrollToRoot(1000);
  }

  responder(resposta: Resposta, id_questao: string) {
    this.removerResponseSelector();
    this.adicionarResposta(resposta, id_questao);
  }

  removeComponent(componentClass: Type<any>) {
    const component = this.components.find(
      (component) => component.instance instanceof componentClass
    );
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      this.entry.remove(this.entry[componentIndex]);
      this.components.splice(componentIndex, 1);
    }
  }

  removerResponseSelector() {
    this.removeComponent(ResponseSelectorComponent);
  }

  criarDataMensagem(): string {
    var date = new Date();
    var hora = moment(date, 'D_M_YYYY').locale('pt-br').format('HH:mm');
    var diaExtenso = moment(date, 'D_M_YYYY').locale('pt-br').format('ddd');
    var diaNumerico = moment(date, 'D_M_YYYY').locale('pt-br').format('D');

    return `${hora} | ${diaNumerico} ${diaExtenso}`;
  }

  setMensagemAtual(questao: Questao) {
    var mensagem = questao.texto_questao.substring(0, 92);

    if (questao.texto_questao.length > 92) {
      mensagem = mensagem + '...';
    }

    this.mensagemAtual = mensagem;
  }
}
