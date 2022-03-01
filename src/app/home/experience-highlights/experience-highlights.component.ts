import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { Experience } from './../../classes/experience';
import { HomeService } from './../../services/home.service';
@Component({
  selector: 'app-experience-highlights',
  templateUrl: './experience-highlights.component.html',
  styleUrls: ['./experience-highlights.component.scss']
})
export class ExperienceHighlightsComponent implements OnInit {

  @ViewChildren('expCard') viewChildren!: QueryList<any>;

  @ViewChild('owl') owl!: CarouselComponent;

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
    startPosition: 0,
    autoHeight: true,
    autoWidth: true
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

  public parseDate(date: Date): string {
    let dateString: string = date as unknown as string;
    return dateString.slice(0, dateString.length-1);
  }

  public scrollToTopOfCard(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
