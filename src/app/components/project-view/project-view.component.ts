import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit {

  public projects: Project[] = [];
  constructor() { }

  ngOnInit() {
    let project1 = new Project();
    project1.name = "project1";
    project1.description = "a description";

    this.projects.push(project1);

  }

}
