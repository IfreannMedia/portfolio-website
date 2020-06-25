import { ProjectService } from './../../services/project-service.ts.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { SlideOpts } from 'src/app/classes/slideOpts';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit, AfterViewInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public slidesIndex: number = 0;
  public projects: Project[] = [];
  public slideOpts = new SlideOpts();
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects.push(...this.projectService.projects);
  }


  ngAfterViewInit() {
    this.updateActiveIndex();
  }

  private updateActiveIndex() {
    if (this.slides) {
      this.slides.getActiveIndex().then((index: number) => {
        this.slidesIndex = index;
      })
    }
  }

}
