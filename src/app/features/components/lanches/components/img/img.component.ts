import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/features/models/card.interface';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input()
  cardDiretiva!: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
