import { Component, OnInit, SecurityContext } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpHeaders } from '@angular/common/http';
import { Questao } from '../../../model/questao.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})

export class ChatComponent implements OnInit {
  questao: Questao;
  data: SafeHtml;
  // @ViewChild(select);

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    $('#chat-box').animate({ scrollTop: $('#chat-box').height() }, 1500);

    this.BuscarQuestaoAtual();

    var msgBot = '<msg-bot></msg-bot>';

    this.data = this.sanitizer.sanitize(SecurityContext.HTML, msgBot);
  }

  BuscarQuestaoAtual(): Questao {
    let headers = new HttpHeaders();

    this.dataService
      .sendPostRequest('questionario/retornarQuestaoAtual', '', headers)
      .subscribe((response: Questao) => {
        this.questao = response;
      });

    return this.questao;
  }
}
