import { Injectable } from '@angular/core';
import { Project } from '../classes/project';
import { NodeWithI18n } from '@angular/compiler';

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
  sourceTree = "Sourcetree",
  jira = "jira"
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

export enum appleSkills {
  systematicTroubleshooting = "systematic troubleshotting",
  communication = "critical thinking",
  problemSolving = "problem solving",
  german = "german",
  teamwork = "teamwork",
  performanceTracking = "performance tracking",
  goingAboveAndBeyondExp = "going above and beyond expectations"
}

export enum projectTypes {
  experience = 'experience',
  education = 'education',
  interests = 'interests'
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects: Project[] = [{
    name: 'Akka Technologies',
    challengesAndOps: '',
    description: 'At Akka I work as part of a determined dev team in the maintanance of a cross platform mobile first web App, used wordlwide in' +
      ' production by a large autombile manufacturing company based in Munich. As well as maintaining and improving legacy code, I also add new features and was part of a total' +
      ' migration of the angular and ionic versions.',
    dateFrom: new Date('2019-04-01'),
    dateTo: new Date(Date.now()),
    projectType: projectTypes.experience,
    technologiesUsed: [technicalSkills.Angular,
    technicalSkills.Ionic,
    technicalSkills.scss,
    technicalSkills.Typescript,
    technicalSkills.rxjs,
    technicalSkills.crossPlaatformDev,
    technicalSkills.Html,
    technicalSkills.bitBucket,
    technicalSkills.sourceTree,
    technicalSkills.Jasmine,
    technicalSkills.Sonarwube,
    technicalSkills.UX,
    technicalSkills.xCode,
    technicalSkills.jira]
  },
  {
    name: 'Creative Digital Media Msc',
    challengesAndOps: '',
    description: 'I was awarded a master\'s degree in Creative Digital Media with a specialization in game development in early 2019' +
      ' from the Technological University of Dublin.',
    dateFrom: new Date('2017-09-01'),
    dateTo: new Date('2019-03-01'),
    projectType: projectTypes.education,
    technologiesUsed: [
      technicalSkills.Html,
      technicalSkills.Javascript,
      technicalSkills.css,
      technicalSkills.Unity,
      technicalSkills.CSharp,
      technicalSkills.Illustrator,
      technicalSkills.PremierPro,
      technicalSkills.Photoshop,
      technicalSkills.UserTesting,
      technicalSkills.PaperPrototyping,
      technicalSkills.RapidPrototyping]
  },
  {
    name: 'English, German BA International',
    challengesAndOps: '',
    description: 'During my 4 year BA International Joint Honors degree at Maynooth University and Universität Bielefeld, ' +
      ' I enjoyed the pleasure of studing a variety of disciplines from literary and culteral analysis to statistics and neuroscience and even linguistic theory.' +
      ' this time laid the foundations for my further work and studies.',
    dateFrom: new Date('2011'),
    dateTo: new Date('2015'),
    projectType: projectTypes.education,
    technologiesUsed: [
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
      bachalorSkills.germanCult]
  }
    , {
    name: 'ApplecCare Technical Support',
    challengesAndOps: '',
    description: '',
    dateFrom: new Date(),
    dateTo: new Date(),
    projectType: projectTypes.experience,
    technologiesUsed: [
      appleSkills.systematicTroubleshooting,
      appleSkills.communication,
      appleSkills.problemSolving,
      appleSkills.german,
      appleSkills.teamwork,
      appleSkills.performanceTracking,
      appleSkills.goingAboveAndBeyondExp,
    ]
  }];

  constructor() {
  }
}
