import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { Experience } from './../../classes/experience';
import { HomeService } from './../../services/home.service';
import { ResponsiveQueryService } from './../../services/responsive-query.service';
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

  private curSlide: number = 0;

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

  constructor(private homeService: HomeService,
    private responsiveQueryService: ResponsiveQueryService) { }

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
    return dateString.slice(0, dateString.length - 1);
  }

  public scrollToTopOfCard(owl: CarouselComponent): void {
    if (this.shouldScrollToTop(owl)) {
      console.log("conditions met");
      document.getElementById('exp-card-slider')?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  private shouldScrollToTop(owl: CarouselComponent): boolean | undefined {
    return owl.slidesOutputData && owl.slidesOutputData.slides && owl.slidesOutputData.slides.length > 0
      && (this.responsiveQueryService.isSmall() || this.responsiveQueryService.isMedium());
  }
}
