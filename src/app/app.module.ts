import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { PartAnalysisPage } from '../pages/part-analysis/part-analysis';
import { FlowFormPage } from '../pages/flow-form/flow-form';
import { InfoModalPage } from '../pages/info-modal/info-modal';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    HomePage,
    FlowFormPage,
    PartAnalysisPage,
    InfoModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    HomePage,
    FlowFormPage,
    PartAnalysisPage,
    InfoModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
