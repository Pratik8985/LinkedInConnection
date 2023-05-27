import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {provideAuth,getAuth} from '@angular/fire/auth'
import {environment} from '../environments/environment'
import {provideStorage,getStorage} from '@angular/fire/storage'
import {getFirestore, provideFirestore} from '@angular/fire/firestore'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  provideFirebaseApp(()=>initializeApp(environment.firebase)),
  provideAuth(()=>getAuth()),
  provideFirestore(()=>getFirestore()),
  provideStorage(()=>getStorage())
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
