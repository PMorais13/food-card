import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';

import { FeaturesComponent } from './features.component';
import { HomeComponent } from './components/home/home.component';
import { LanchesComponent } from './components/lanches/lanches.component';
import { PratosComponent } from './components/pratos/pratos.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { CardComponent } from './components/lanches/components/card/card.component';
import { LanchesModule } from './components/lanches/lanches.module';


@NgModule({
  declarations: [
    FeaturesComponent,
    HomeComponent,
    PratosComponent,
    BebidasComponent,
    HistoriaComponent,
    ContatoComponent,
    ComentarioComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LanchesModule,
  ],
  exports: [
    FeaturesComponent
  ],
})
export class FeaturesModule { }
