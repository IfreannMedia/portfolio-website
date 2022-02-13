import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../../services/dummy-data.service';
import { Experience } from './../../classes/experience';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    items: 1
  }

  skillsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    items: 5
  }

  constructor(private dummyData: DummyDataService) { }


  ngOnInit(): void {
    this.experiences = this.dummyData.getExperiences();
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
