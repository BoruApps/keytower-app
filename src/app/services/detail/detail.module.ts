import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule , IonicRouteStrategy} from '@ionic/angular';

import { DetailPage } from './detail.page';

import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { ChecklistModalPage } from '../checklist-modal/checklist-modal.page';
import {ImageConfirmModalPage} from "../image-confirm-modal/image-confirm-modal.page";
import {AddItemModalPage} from "../add-item/add-item.page";
import {AddAssetModalPage} from "../add-asset/add-asset.page";
import {DailsNotesModalPage} from "../daily-notes/daily-notes.page";
import { ImageSlider } from "../image-slider/image-slider.page";
import { SoWAll } from "../SoW-All/SoW-All.page";
import {CommentsModalPage} from '../comments/comments.page';
import { HTTP } from '@ionic-native/http/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
    declarations: [DetailPage, ImageModalPage, ChecklistModalPage, ImageConfirmModalPage,ImageSlider, SoWAll, AddItemModalPage,AddAssetModalPage, DailsNotesModalPage, CommentsModalPage],
    entryComponents: [ImageModalPage, ChecklistModalPage, ImageConfirmModalPage,ImageSlider, SoWAll, AddItemModalPage,AddAssetModalPage, DailsNotesModalPage, CommentsModalPage],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        File,
        HTTP,
        FileOpener,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ],
})
export class DetailPageModule {}
