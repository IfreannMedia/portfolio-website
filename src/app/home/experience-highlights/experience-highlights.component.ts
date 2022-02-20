import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Experience } from './../../classes/experience';
import { HomeService } from './../../services/home.service';
@Component({
  selector: 'app-experience-highlights',
  templateUrl: './experience-highlights.component.html',
  styleUrls: ['./experience-highlights.component.scss']
})
export class ExperienceHighlightsComponent implements OnInit {

  public nowDate: Date = new Date(Date.now());

  public experiences: Experience[] = [];


  cardOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    items: 1,
    startPosition: 0
  }

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

  constructor(private homeService: HomeService) { }


  ngOnInit(): void {
    this.getExperiences();
  }

  private getExperiences(): void {
    this.homeService.getExperiences().subscribe({
      next: (Experiences: Experience[]) => {
        this.experiences = Experiences;
      }
    })
  }

  // TODO remove?
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
