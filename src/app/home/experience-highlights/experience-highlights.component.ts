import { Experience } from './../../classes/experience';
import { DummyDataService } from '../../services/dummy-data.service';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-experience-highlights',
  templateUrl: './experience-highlights.component.html',
  styleUrls: ['./experience-highlights.component.scss']
})
export class ExperienceHighlightsComponent implements OnInit {

  myTechs: string[] = [];
  public nowDate: Date = new Date(Date.now());

  public experiences: Experience[] = [];
  constructor(private dummyData: DummyDataService) { }


  ngOnInit(): void {
    this.myTechs = this.dummyData.getMyTechs();
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
