import { ProjectService } from './../../services/project-service.ts.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { SlideOpts } from 'src/app/classes/slideOpts';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit {

  public projects: Project[] = [];
  public slideOpts = new SlideOpts();
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects.push(...this.projectService.projects);
  }

}
