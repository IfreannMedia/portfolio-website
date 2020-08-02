import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SideStickyComponent } from './side-sticky.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule,
        IonicModule],
    declarations: [SideStickyComponent],
    exports: [SideStickyComponent]
})
export class SideStickyModule { }