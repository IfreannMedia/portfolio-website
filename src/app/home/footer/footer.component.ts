import { Component } from '@angular/core';
import { ResponsiveQueryService } from './../../services/responsive-query.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private responsiveService: ResponsiveQueryService) { }
  public justShowEmail(): boolean {
    return this.responsiveService.isSmall() || this.responsiveService.isMedium();
  }

  public showFullText(): boolean {
    return !this.responsiveService.isSmall() && !this.responsiveService.isMedium()
  }
}
