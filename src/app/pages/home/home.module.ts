import { FooterComponentModule } from './../../components/footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './../../components/header/header.module';
import { ProjectViewModule } from './../../components/project-view/project-view.module';
import { SideStickyModule } from './../../components/side-sticky/side-sticky.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    HeaderModule,
    SideStickyModule,
    ProjectViewModule,
    HomePageRoutingModule,
    FooterComponentModule
  ],
  declarations: [HomePage],
  schemas: []
})
export class HomePageModule { }
