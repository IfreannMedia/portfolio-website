import { HomeService } from './../../services/home.service';
import { Project } from './../../classes/project';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-project-highlights',
  templateUrl: './project-highlights.component.html',
  styleUrls: ['./project-highlights.component.scss']
})
export class ProjectHighlightsComponent implements OnInit {

  public projects: Project[] = [];

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

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getProjects();
  }
  private getProjects() {
    this.homeService.getProjects().subscribe({
      next: (projects: Project[]) => {
        this.projects = projects;
      }
    });
  }

  openGithub(link: string) {
    window.open(link, "_blank");
  }


  skillsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    items: 3,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true
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

  public getSkillsOwlOptions(project: Project): OwlOptions {
    this.skillsOptions.loop = Boolean(this.skillsOptions.items && project.technologiesUsed.length > this.skillsOptions.items);
    return this.skillsOptions;
  }

}
