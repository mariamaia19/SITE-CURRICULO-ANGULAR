import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const options = {
      strings: [
        'Hello World'
      ],
      typeSpeed: 60,
      backSpeed: 0,
      backDelay: 2000,
      loop: true
    };

    new Typed('.typed', options);
  }

  descricaoSaudacao = ` {
      String nome = "Maria Queiroz";
      String profissao = "Desenvolvedora Web Java";
      String habilidades[]= {
      'Angular', 
      'Java', 
      'Ux Design',
      'HTML/CSS',
      'Javascript'};
  }`
}
