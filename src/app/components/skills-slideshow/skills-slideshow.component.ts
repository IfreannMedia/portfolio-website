import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from './../../services/home.service';
import { ResponsiveQueryService, SIZE } from './../../services/responsive-query.service';

@Component({
  selector: 'app-skills-slideshow',
  templateUrl: './skills-slideshow.component.html',
  styleUrls: ['./skills-slideshow.component.scss']
})
export class SkillsSlideshowComponent implements OnInit {


  @Input()
  public skills: {id: number, name: string}[] = [];

  skillsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    items: 5,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true
  }

  constructor(private homeService: HomeService,
    private responsiveService: ResponsiveQueryService) { }


  ngOnInit(): void {
    this.setSkillsOptions();
  }
  private setSkillsOptions(): void {
    switch (this.responsiveService.getSize()) {
      case SIZE.SMALL:
        this.skillsOptions.items = 1;
        this.skillsOptions.autoHeight = true;
        break;
      case SIZE.MEDIUM:
        this.skillsOptions.items = 2;
        break;
      case SIZE.LARGE:
        this.skillsOptions.items = 4;
        break;
      case SIZE.XLARGE:
        this.skillsOptions.items = 5;
        break;
      default:
        break;
    }
    console.log("check it ", this.skillsOptions);
  }

  public setBorderColour(event: Event) {
    if (event && event.target) {
      const target: HTMLElement = event.target as HTMLElement;
      // @ts-ignore
      const x = event.pageX - target.offsetLeft
      // @ts-ignore
      const y = event.pageY - target.offsetTop


      target.style.setProperty('--x', `${x}px`)
      target.style.setProperty('--y', `${y}px`)
    }
  }
}
