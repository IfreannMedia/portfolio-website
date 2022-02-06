import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page/home-page.component';
import { LandingBlockComponent } from '../landing-block/landing-block.component';
import { ArtisticElementsComponent } from '../artistic-elements/artistic-elements.component';
import { ExperienceHighlightsComponent } from '../experience-highlights/experience-highlights.component';
import { ProjectHighlightsComponent } from '../project-highlights/project-highlights.component';



@NgModule({
  declarations: [
    HomePageComponent,
    LandingBlockComponent,
    ArtisticElementsComponent,
    ExperienceHighlightsComponent,
    ProjectHighlightsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
