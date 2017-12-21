import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SwingStackComponent } from '../components/swing-stack/swing-stack'
import { SwingCardComponent, SwingCard } from '../components/swing-card/swing-card'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SwingCardComponent,
    SwingStackComponent,
    SwingCard
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SwingCardComponent,
    SwingStackComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
