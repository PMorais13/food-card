import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from '../features/features-routing.module';
import { CoreComponent } from './core.component';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
  ],
  exports: [
    CoreComponent
  ],
})
export class CoreModule { }
