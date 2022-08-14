import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Adriana Arake'
  text = '';

  pessoas = [
    {
      nome: "Adriana",
      sobrenome: "Arake"
    },
    {
      nome: "Joao",
      sobrenome: "Santos"
    },
    {
      nome: "Ana",
      sobrenome: "Galvão"
    }
  ];

  constructor() {

  }

  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou em mim', nome)
  }
}
