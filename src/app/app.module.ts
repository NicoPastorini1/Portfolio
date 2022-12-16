// dependencias de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//modulos
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { StyleClassModule } from 'primeng/styleclass';
import { LottieModule } from 'ngx-lottie';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import player from 'lottie-web';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
// componentes
import { DefaultLayaoutComponent } from './containers/default-layaout/default-layaout.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { MoreComponent } from './views/more/more.component';


export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    DefaultLayaoutComponent,
    MoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    [LottieModule.forRoot({ player: playerFactory })],
    StyleClassModule,
    TooltipModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    TagModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
