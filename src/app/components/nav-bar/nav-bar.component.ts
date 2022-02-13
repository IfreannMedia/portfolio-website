import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  @ViewChild('navbar') private navbar!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  handleScrollEvent(event: Event) {
    this.addStyling(event);
  }

  constructor() { }
  ngOnInit() {

  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.addStyling, true);
  }
  public navigateTo(url: string): void {
    window.open(url, "_blank");
  }

  private addStyling(event: Event): void {
    const scrollingEl: Element | null = (event.target as Document).scrollingElement;
    if (!this.navbar || (!event || !event.target || !scrollingEl))
      return;
    const scrollTopVal: number = scrollingEl.scrollTop;
    if (scrollTopVal > 0) {
      this.navbar.nativeElement.classList.add("shadow");
    } else {
      this.navbar.nativeElement.classList.remove("shadow");
    }
  }

  public scrollToView(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  public scrollToTop(): void {
    //@ts-ignore
    	document.scrollingElement?.scrollTop = 0;
    }
}
