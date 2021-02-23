import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HomeComponent } from './components/home/home.component';
import { LanchesComponent } from './components/lanches/lanches.component';
import { PratosComponent } from './components/pratos/pratos.component';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'lanches',
        component: LanchesComponent,
      },
      {
        path: 'pratos',
        component: PratosComponent,
      },
      {
        path: 'bebidas',
        component: BebidasComponent,
      },
      {
        path: 'historia',
        component: HistoriaComponent,
      },
      {
        path: 'contato',
        component: ContatoComponent,
      },
      {
        path: 'comentario',
        component: ComentarioComponent,
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
