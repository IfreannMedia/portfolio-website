import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [FooterComponent],
    imports: [IonicModule, FlexLayoutModule],
    exports: [FooterComponent],
    providers: [],
})

export class FooterComponentModule {

}