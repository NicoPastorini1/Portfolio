import { Component } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {


  displayDA = false;
  displayFS = false;

  showDialogDA() {
    this.displayDA = true;
    this.displayFS = false
  }

  showDialogFS() {
    this.displayFS = true;
    this.displayDA = false;
  }



}
