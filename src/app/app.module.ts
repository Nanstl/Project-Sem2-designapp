import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

var firebaseConfig = {
  apiKey: "AIzaSyA2ZmF3s_e876Ig6DmfI86yhODIPSzihyA",
  authDomain: "sem2-2e0ff.firebaseapp.com",
  databaseURL: "https://sem2-2e0ff.firebaseio.com",
  projectId: "sem2-2e0ff",
  storageBucket: "sem2-2e0ff.appspot.com",
  messagingSenderId: "160554567090",
  appId: "1:160554567090:web:aa0df6f917a9d36e1dd0ab",
  measurementId: "G-G03MVYBLPX"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig) ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
