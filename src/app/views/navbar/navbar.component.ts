import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  options: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_ypej3gd9.json'};
}
