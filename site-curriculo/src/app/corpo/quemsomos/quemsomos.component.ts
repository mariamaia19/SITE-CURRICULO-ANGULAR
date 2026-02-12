import { Component } from '@angular/core';
import { Projetos, projetos } from './projetoslista';

@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.component.html',
  styleUrls: ['./quemsomos.component.css']
})
export class QuemsomosComponent {
  descricao = `Eu me Chamo Maria Queiroz, sou desenvoldora Front-End com conhecimento no Angular Framework, HTML, CSS e Javascript, além de bibliotecas javascript como a Typed, Swiper e pré-processadores CSS como SASS e LESS.

  Apaixonada por tecnologia desde pequena, sempre vivi conectada com o computador por meio de jogos, porém nunca estimulada a conhecer mais a fundo até que em 2014 tive minha primeira experiência mexendo no terminal do windows quando precisei recuperar alguns arquivos da faculdade que foram corrompidos e passei a me interessar pelo funcionamento dos computadores de modo geral e anos mais tarde (2022), conheci a programação e desde então não parei de buscar conhecimento sobre a área, onde estudei por conta e fiz alguns cursos.
  
  Atualmente, estou buscando minha primeira oportunidade como programadora Front-End, seja em estágio ou como Dev Júnior, com o intuito de aprender mais e me desenvolver na área.`
  

  projetos: Projetos[] = projetos;
}
