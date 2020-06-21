import { ProjectViewComponent } from './project-view.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [IonicModule,
        CommonModule],
    declarations: [ProjectViewComponent],
    exports: [ProjectViewComponent]
})
export class ProjectViewModule { }