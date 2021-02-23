import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.component.html',
  styleUrls: ['./lanches.component.scss']
})
export class LanchesComponent implements OnInit {

  cardArray: Array<Card> = [
    {
      src: 'https://www.nidelins.com.br/wp-content/uploads/2019/04/hamburguer-xique-xique.jpeg',
      alt: 'Hambuerguer Artesanal',
      name: 'Hambuerguer Artesanal',
      description: 'Hambuerguer com pão e carne artesanal, carne de alcatra, queijo prata, molhos e alface',
      value: '$25,90',
    },
    {
      src: 'https://www.nidelins.com.br/wp-content/uploads/2019/04/hamburguer-xique-xique.jpeg',
      alt: 'Hambuerguer Artesanal',
      name: 'Hambuerguer Artesanal',
      description: 'Hambuerguer com pão e carne artesanal, carne de alcatra, queijo prata, molhos e alface',
      value: '$25,90',
    },
    {
      src: 'https://www.nidelins.com.br/wp-content/uploads/2019/04/hamburguer-xique-xique.jpeg',
      alt: 'Hambuerguer Artesanal',
      name: 'Hambuerguer Artesanal',
      description: 'Hambuerguer com pão e carne artesanal, carne de alcatra, queijo prata, molhos e alface',
      value: '$25,90',
    },
    {
      src: 'https://www.nidelins.com.br/wp-content/uploads/2019/04/hamburguer-xique-xique.jpeg',
      alt: 'Hambuerguer Artesanal',
      name: 'Hambuerguer Artesanal',
      description: 'Hambuerguer com pão e carne artesanal, carne de alcatra, queijo prata, molhos e alface',
      value: '$25,90',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
