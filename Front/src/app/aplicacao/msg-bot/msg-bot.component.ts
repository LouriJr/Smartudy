import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Questao } from 'src/model/questao.model';

@Component({
  selector: 'msg-bot',
  templateUrl: './msg-bot.component.html',
  styleUrls: ['./msg-bot.component.css'],
})
export class MsgBotComponent implements OnInit {
  
  constructor() {}

  @Input() questao: Questao;

  ngOnInit(): void {
  }
}
