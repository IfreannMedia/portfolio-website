import { Project } from './../../classes/project';
import { DummyDataService } from './../../services/dummy-data.service';
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
    navText: ['', ''],
    nav: true,
    items: 1,
    startPosition: 0
  }

  constructor(private dummyData: DummyDataService) { }

  ngOnInit(): void {
    this.projects = this.dummyData.getProjects();
  }

}
