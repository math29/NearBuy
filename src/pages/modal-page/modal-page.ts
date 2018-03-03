import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'modal-page',
  templateUrl: 'modal-page.html'
})
export class ModalPage {

  constructor(public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
