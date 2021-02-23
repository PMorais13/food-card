import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';

import { LanchesComponent } from './lanches.component';
import { ImgComponent } from './components/img/img.component';


@NgModule({
  declarations: [
    LanchesComponent,
    CardComponent,
    ImgComponent,
],
  imports: [
    CommonModule,
],
  exports: [
    LanchesComponent,
],
})
export class LanchesModule { }
