import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/features/models/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  cardDiretiva!: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
