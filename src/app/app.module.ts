import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AgmCoreModule} from '@agm/core';
import {StoresService} from '../services/stores.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SelectedStore} from '../model/selectedStore';
import {ModalPage} from '../pages/modal-page/modal-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ModalPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAS84SNDUppolBqNMUQ9Wl636khNXkIrjs'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoresService,
    SelectedStore
  ]
})
export class AppModule {}
