import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayaoutComponent } from './containers/default-layaout/default-layaout.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { MoreComponent } from './views/more/more.component';

const routes: Routes = [
  { path: '', component: DefaultLayaoutComponent,  
  children:[
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'more', component: MoreComponent},
    { path: 'aboutme', loadChildren: () => import('./views/aboutme/aboutme.module').then(m => m.AboutmeModule)}
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
