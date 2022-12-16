import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutmeRoutingModule } from './aboutme-routing.module';
import { AboutmeComponent } from './aboutme.component';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
    imports: [
      AboutmeRoutingModule,
      CommonModule,
      AccordionModule,
      DialogModule,
      TooltipModule
    ],
    declarations: [
      AboutmeComponent
    ]
  })
  export class AboutmeModule { }