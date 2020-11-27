import { Component, OnInit, Input } from '@angular/core';
import { Curso } from 'src/Model/curso.model';
declare var $: any;

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  
  @Input () curso: Curso;
  constructor() { 
    this.curso = new Curso();
    this.curso.Alunos = 875;
    this.curso.Titulo = 'Lógica de programação';
    this.curso.Avaliacao = '9.6';
    this.curso.CargaHoraria = '8';
    this.curso.Ilustracao = 'assets/img/svg/illustration.svg';
    this.curso.Progresso = 3;
  }

  ngOnInit(): void {
    $('.counter-up').counterUp({
      delay: 10,
      time: 1000
    });
  
  }

}
