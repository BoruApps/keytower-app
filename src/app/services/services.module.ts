import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicesPage } from './services.page';
import { ProfileModalPage } from './profile/profile.page';
import { AllsowActivity } from "./All-sowActivity/All-sowActivity.page";
import { SoWDelay } from "./SoW-Delay/SoW-Delay.page";
import { ImageGallery } from "./image-gallery/image-gallery.page";
import { imagePreview } from "./image-preview/image-preview.page";

const routes: Routes = [
  {
    path: '',
    component: ServicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicesPage, ProfileModalPage, AllsowActivity, SoWDelay,ImageGallery,imagePreview],
    entryComponents: [ProfileModalPage, AllsowActivity, SoWDelay,ImageGallery,imagePreview],
})
export class ServicesPageModule {}
