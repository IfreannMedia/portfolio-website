import { ProjectViewComponent } from './project-view.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [IonicModule,
        CommonModule,
        FlexLayoutModule],
    declarations: [ProjectViewComponent],
    exports: [ProjectViewComponent]
})
export class ProjectViewModule { }