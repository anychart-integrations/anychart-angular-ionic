import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AnychartIonicDemoApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DemoDataProviderService } from './services/demo-data-provider.service';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AnychartIonicDemoApp,
    HomePage,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AnychartIonicDemoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AnychartIonicDemoApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DemoDataProviderService
  ]
})
export class AppModule {}
