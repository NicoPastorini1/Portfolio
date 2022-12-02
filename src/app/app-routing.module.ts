import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayaoutComponent } from './containers/default-layaout/default-layaout.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  { path: '', component: DefaultLayaoutComponent,  
  children:[
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'projects', loadChildren: () => import('./views/projects/projects.module').then(m => m.ProjectsModule ) },
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
