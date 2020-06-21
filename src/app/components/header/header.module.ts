import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@NgModule({
    imports: [IonicModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule { }