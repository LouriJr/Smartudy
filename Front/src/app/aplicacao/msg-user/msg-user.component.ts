import { Component, Input, OnInit } from '@angular/core';
import { Questao } from 'src/model/questao.model';
import { Resposta } from 'src/model/resposta.model';

@Component({
  selector: 'msg-user',
  templateUrl: './msg-user.component.html',
  styleUrls: ['./msg-user.component.css']
})
export class MsgUserComponent implements OnInit {

  constructor() { }
  @Input () resposta: Resposta;
  @Input () id_questao: string;
  
  ngOnInit(): void {
  }

}
