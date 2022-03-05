import { Component } from '@angular/core';
import { ResponsiveQueryService } from './../../services/responsive-query.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public open = false;

  constructor(public responsiveService: ResponsiveQueryService) { }

  public navigateTo(url: string, target: string = '_blank'): void {
    window.open(url, target);
  }

  public scrollToView(elementId: string, block: ScrollLogicalPosition = "start"): void {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth", block: block });
  }

  public scrollToTop(): void {
    //@ts-ignore
    document.scrollingElement?.scrollTop = 0;
  }

  public toggleMenu(): void {
    this.open = !this.open;
  }

  public closeMenu(): void {
    this.open = false;
  }
}
