import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StoresService} from '../../services/stores.service';
import {Store} from '../../model/store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stores: Store[];

  constructor(public navCtrl: NavController, private storeService: StoresService) {
    this.storeService.getStoreData().subscribe(
      stores => {
        this.stores = stores;

        console.log('stores', this.stores);
      }
    );
  }

}
