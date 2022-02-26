import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from './../../classes/project';
import { HomeService } from './../../services/home.service';
import { ResponsiveQueryService } from './../../services/responsive-query.service';


@Component({
  selector: 'app-project-highlights',
  templateUrl: './project-highlights.component.html',
  styleUrls: ['./project-highlights.component.scss']
})
export class ProjectHighlightsComponent implements OnInit {

  public projects: Project[] = [];
  public showImage = true;

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
    autoHeight: true
  }

  constructor(private homeService: HomeService,
    private responsiveService: ResponsiveQueryService) { }

  ngOnInit(): void {
    this.showImage = !this.responsiveService.isSmall();
    this.getProjects();
  }
  private getProjects() {
    this.homeService.getProjects().subscribe({
      next: (projects: Project[]) => {
        this.projects = projects;
      },
      error: (err) => console.error("failed to fetch projects: ", err)
    });
  }

  openGithub(link: string) {
    window.open(link, "_blank");
  }

}
