import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing.module';


import { ProjectsComponent } from './projects.component';

@NgModule({
    imports: [
      ProjectRoutingModule,
      CommonModule,
    ],
    declarations: [
        ProjectsComponent
    ]
  })
  export class ProjectsModule { }