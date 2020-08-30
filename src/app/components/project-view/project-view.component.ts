import { ProjectService, projectTypes } from './../../services/project-service.ts.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { SlideOpts } from 'src/app/classes/slideOpts';
import { IonSlides, IonSegment, IonRange } from '@ionic/angular';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit, AfterViewInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public slidesIndex: number = 0;
  public sections: string[] = [];
  public projects: Project[] = [];
  public slideOpts;
  public selectedProject: Project;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.createSections();
    this.projects.push(...this.projectService.projects);
    this.selectedProject = this.projects[0];
  }

  public createSections() {
    this.sections.push(...[projectTypes.experience,
    projectTypes.education,
    projectTypes.interests])
  }

  ngAfterViewInit() {
    this.setSlidesToBeStandard();
    this.subscribeToSlideChange();
    this.updateActiveIndex();
  }

  public subscribeToSlideChange() {
    this.slides.ionSlideDidChange.subscribe(() => {
      this.updateActiveIndex();
    });
  }

  private setSlidesToBeStandard() {
    this.slideOpts = new SlideOpts();
  }

  public slideToNextSection(change: CustomEvent) {
    const nextValue = change.detail.value;
    if (this.slides) {
      const index = this.projects.findIndex((proj: Project, i) => {
        return proj.projectType.toLowerCase() === nextValue.toLowerCase() && i == this.slidesIndex;
      })
      if (index > -1) {
        this.slides.slideTo(index);
      }
    }
  }

  private updateActiveIndex(): Promise<any> {
    if (this.slides) {
      return this.slides.getActiveIndex().then((index: number) => {
        this.slidesIndex = index;
        this.setSelectedProject(this.slidesIndex);
      })
    }
  }

  public slideChanged() {
    this.updateActiveIndex().then(() => {
      this.setSelectedProject(this.slidesIndex);
    });
  }
  public setSelectedProject(index: number) {
    this.selectedProject = this.projects[index] ? this.projects[index] : this.selectedProject;
  }

  public slideTo(slideIndex: number) {
    if (this.slides && this.projects[slideIndex]) {
      this.slides.slideTo(slideIndex);
    }
  }
}
