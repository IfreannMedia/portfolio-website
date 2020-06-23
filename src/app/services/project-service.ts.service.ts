import { Injectable } from '@angular/core';
import { Project } from '../classes/project';

export enum technologies {
  UX = "UX",
  InfoModelling = "Information Modeling",
  Html = "Html",
  Javascript = "Javascript",
  css = "css",
  scss = "scss",
  CSharp = "C#",
  Unity = "Unity",
  Photoshop = "Adobe Photoshop",
  PremierPro = "Adobe Priemer Pro",
  Illustrator = "Adobe Illustrator",
  Blender = "Blender",
  PaperPrototyping = "paper prototyping",
  RapidPrototyping = "Rapid Prototyping",
  UserTesting = "User Testing",
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  public projects: Project[] = []

  constructor() {
    this.getProjects();
  }


  private getProjects() {
    debugger;
    let mastersDegree = new Project();
    mastersDegree.name = "Creative Digital Media Msc";
    mastersDegree.technologiesUsed = [technologies.Html, technologies.Javascript, technologies.css, technologies.Unity, technologies.CSharp, technologies.Illustrator,
    technologies.PremierPro, technologies.Photoshop, technologies.UserTesting, technologies.PaperPrototyping, technologies.RapidPrototyping];
    mastersDegree.description = "I was awarded a master's degree in Creative Digital Media with a specialization in game development in early 2019" +
      " from the Technological University of Dublin."

    this.projects.push(mastersDegree);
  }
}
