import {Component} from '@angular/core';
import {MenuController, ModalController, NavController} from 'ionic-angular';
import {StoresService} from '../../services/stores.service';
import {Store} from '../../model/store';
import {SelectedStore} from '../../model/selectedStore';
import {ModalPage} from '../modal-page/modal-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stores: Store[];

  constructor(public navCtrl: NavController, private storeService: StoresService, private menuCtrl: MenuController,
              private selectedStore: SelectedStore, public modalCtrl: ModalController) {
    this.storeService.getStoreData().subscribe(
      stores => {
        this.stores = stores;

        console.log('stores', this.stores);
      }
    );
  }

  openDetails(store: Store) {
    this.selectedStore.store = store;
    this.menuCtrl.toggle('right');
  }

  openQrCode() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
