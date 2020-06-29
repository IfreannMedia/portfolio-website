import { Injectable } from '@angular/core';
import { Project } from '../classes/project';

export enum technicalSkills {
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
  Angular = "Angular",
  Ionic = "Ionic",
  Typescript = "Typescript",
  OOP = "Object Oriented Programming",
  Jasmine = "Jasmine Testing Framework",
  Jenkins = "Jenkins",
  Sonarwube = "Sonarqube",
  rxjs = "rxjs",
  xCode = "xCode",
  crossPlaatformDev = "cross platform dev",
  bitBucket = "Bitbucket",
  sourceTree = "Sourcetree"
}

export enum bachalorSkills {
  critThinking = "critical thinking",
  academicWriting = "academic writing",
  litAnalysis = "literary analysis",
  lingTheory = "Linguistic theory",
  hLangDev = "Human Language development",
  neuroscience = "Neuroscience",
  devPsychology = "developmental psychology",
  socPsychology = "social psychology",
  statistics = "statistics",
  scientificExperimentation = "scientific experimentation",
  germanCult = "German cultural studies",
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  public projects: Project[] = []

  constructor() {
    this.getProjects();
  }


  // TODO store the projects in a database and retrieve with a rest call
  private getProjects() {
    this.retrieveAkka();
    this.retrieveMastersDegree();
    this.retrieveAppleCare();
    this.retrieveBachelorDegree();
  }

  public retrieveMastersDegree() {
    let mastersDegree = new Project();
    mastersDegree.name = "Creative Digital Media Msc";
    mastersDegree.technologiesUsed = [technicalSkills.Html, technicalSkills.Javascript, technicalSkills.css, technicalSkills.Unity, technicalSkills.CSharp, technicalSkills.Illustrator,
    technicalSkills.PremierPro, technicalSkills.Photoshop, technicalSkills.UserTesting, technicalSkills.PaperPrototyping, technicalSkills.RapidPrototyping];
    mastersDegree.description = "I was awarded a master's degree in Creative Digital Media with a specialization in game development in early 2019" +
      " from the Technological University of Dublin."

    this.projects.push(mastersDegree);
  }
  public retrieveAkka() {
    let mastersDegree = new Project();
    mastersDegree.name = "Akka Technologies";
    mastersDegree.technologiesUsed = [technicalSkills.Html, technicalSkills.Typescript, technicalSkills.scss, technicalSkills.Angular, technicalSkills.Ionic, technicalSkills.Jasmine,
    technicalSkills.Sonarwube, technicalSkills.UX, technicalSkills.rxjs, technicalSkills.xCode, technicalSkills.crossPlaatformDev, technicalSkills.bitBucket, technicalSkills.sourceTree];
    mastersDegree.description = "At Akka I work as part of a determined dev team in the maintanance of a cross platform mobile first web App, used wordlwide in" +
      " production by a large autombile manufacturing company based in Munich. As well as maintaining and improving legacy code, I also add new features and was part of a total" +
      " migration of the angular and ionic versions.";

    this.projects.push(mastersDegree);
  }
  public retrieveBachelorDegree() {
    let mastersDegree = new Project();
    mastersDegree.name = "English, German BA International";
    mastersDegree.technologiesUsed = [
      bachalorSkills.critThinking,
      bachalorSkills.academicWriting,
      bachalorSkills.litAnalysis,
      bachalorSkills.lingTheory,
      bachalorSkills.hLangDev,
      bachalorSkills.neuroscience,
      bachalorSkills.devPsychology,
      bachalorSkills.socPsychology,
      bachalorSkills.statistics,
      bachalorSkills.scientificExperimentation,
      bachalorSkills.germanCult];
    mastersDegree.description = "During my 4 year BA International Joint Honors degree at Maynooth University and Universität Bielefeld, " +
      " I enjoyed the pleasure of studing a variety of disciplines from literary and culteral analysis to statistics and neuroscience and even linguistic theory." +
      " this time laid the foundations for my further work and studies.";

    this.projects.push(mastersDegree);
  }
  public retrieveAppleCare() {
    let mastersDegree = new Project();
    mastersDegree.name = "ApplecCare Technical Support";
    mastersDegree.technologiesUsed = [
      bachalorSkills.critThinking,
      bachalorSkills.academicWriting,
      bachalorSkills.litAnalysis,
      bachalorSkills.lingTheory,
      bachalorSkills.hLangDev,
      bachalorSkills.neuroscience,
      bachalorSkills.devPsychology,
      bachalorSkills.socPsychology,
      bachalorSkills.statistics,
      bachalorSkills.scientificExperimentation,
      bachalorSkills.germanCult];
    mastersDegree.description = "Throughout my 2 years working at AppleCare at the European Headquarters in Cork, I enjoyed applying my linguistic, soft, and critical thinking " +
      " skills in a fast-paced environment, working initially as a junior and then progressing to a senior support specialist." +
      " my time here taught me an immense amount on customer relations, soft skills in general, and always going the extra mile.";

    this.projects.push(mastersDegree);
  }
}
