import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SideStickyComponent } from './side-sticky.component';


@NgModule({
    imports: [IonicModule],
    declarations: [SideStickyComponent],
    exports: [SideStickyComponent]
})
export class SideStickyModule { }