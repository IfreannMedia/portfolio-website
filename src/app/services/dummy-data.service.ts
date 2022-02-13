import { Injectable } from '@angular/core';
import { Experience } from '../classes/experience';
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
export class DummyDataService {

  public experiences: Experience[] = [
    {
      title: "Adesso",
      description: "Wokring at adesso I took care of multiple full stack web applications for a large client in the automative sector. " +
        "Aside from feature development, my tasks included migrating two Angular frontends to the latest marjor version, at the time 13.x.x, and then integrating the smaller " +
        "of the frontends into the larger one. I also worked extensively across the entire tech stack, from frontend to backend to CI/CD and OPS. " +
        "Business communications were primarily carried out in German, and I had the pleasure of working with excellent colleagues.",
      skills: ["Angular", "Typescript", "Java EE", "Springboot", "Postgresql", "Jenkins", "Bitbucket", "SonarQube", "SSH", "Glassfish", "Payara", "ITSM", "JIRA", "Bitbucket", "Confluence"],
      dateFrom: new Date('2021-10-01'),
      dateTo: new Date(Date.now()),
      current: true
    },
    {
      title: "Akka",
      description: "During my time at Akka I worked on two large scale web applications for a client in the automotive industry. My first role was as a frontend dev, working on a " +
        "cross platform SPA targeting Iphones, Chrome, and Android, buit with Ionic, Angular, and Typescript. It was deployed in many " +
        "countries. As well as planning and developing features, I had the honour of migrating the frontend from Angular 5 to Angular 11. Soon after I began work " +
        "as a full stack developer on a large scale web portal for materials and tools management built with Liferay. " +
        "Business communications were primarily carried out in German, I got to work with some excellent colleagues too.",
      skills: ["Angular", "Ionic", "Typescript", "Xcode", "Java EE", "Liferay", "Oracle SQL", "Jenkins", "Bitbucket", "SSH", "Glassfish", "ITSM", "JIRA", "Bitbucket", "Confluence"],
      dateFrom: new Date('2019-04-01'),
      dateTo: new Date('2021-09-30'),
    }

    //   {
    //   name: 'Akka Technologies',
    //   challengesAndOps: '',
    //   description: 'At Akka I work as part of a determined dev team in the maintanance of a cross platform mobile first web App, used wordlwide in' +
    //     ' production by a large autombile manufacturing company based in Munich. As well as maintaining and improving legacy code, I also add new features and was part of a total' +
    //     ' migration of the angular and ionic versions.',
    //   dateFrom: new Date('2019-04-01'),
    //   dateTo: new Date(Date.now()),
    //   projectType: projectTypes.experience,
    //   technologiesUsed: [technicalSkills.Angular,
    //   technicalSkills.Ionic,
    //   technicalSkills.scss,
    //   technicalSkills.Typescript,
    //   technicalSkills.rxjs,
    //   technicalSkills.crossPlaatformDev,
    //   technicalSkills.Html,
    //   technicalSkills.bitBucket,
    //   technicalSkills.sourceTree,
    //   technicalSkills.Jasmine,
    //   technicalSkills.Sonarwube,
    //   technicalSkills.UX,
    //   technicalSkills.xCode,
    //   technicalSkills.jira]
    // },
    // {
    //   name: 'Creative Digital Media Msc',
    //   challengesAndOps: '',
    //   description: 'I was awarded a master\'s degree in Creative Digital Media with a specialization in game development in early 2019' +
    //     ' from the Technological University of Dublin.',
    //   dateFrom: new Date('2017-09-01'),
    //   dateTo: new Date('2019-03-01'),
    //   projectType: projectTypes.education,
    //   technologiesUsed: [
    //     technicalSkills.Html,
    //     technicalSkills.Javascript,
    //     technicalSkills.css,
    //     technicalSkills.Unity,
    //     technicalSkills.CSharp,
    //     technicalSkills.Illustrator,
    //     technicalSkills.PremierPro,
    //     technicalSkills.Photoshop,
    //     technicalSkills.UserTesting,
    //     technicalSkills.PaperPrototyping,
    //     technicalSkills.RapidPrototyping]
    // }, {
    //   name: 'ApplecCare Technical Support',
    //   challengesAndOps: '',
    //   description: '',
    //   dateFrom: new Date('2015'),
    //   dateTo: new Date('2017'),
    //   projectType: projectTypes.experience,
    //   technologiesUsed: [
    //     appleSkills.systematicTroubleshooting,
    //     appleSkills.communication,
    //     appleSkills.problemSolving,
    //     appleSkills.german,
    //     appleSkills.teamwork,
    //     appleSkills.performanceTracking,
    //     appleSkills.goingAboveAndBeyondExp,
    //   ]
    // },
    // {
    //   name: 'English, German BA International',
    //   challengesAndOps: '',
    //   description: 'During my 4 year BA International Joint Honors degree at Maynooth University and Universität Bielefeld, ' +
    //     ' I enjoyed the pleasure of studing a variety of disciplines from literary and culteral analysis to statistics and neuroscience and even linguistic theory.' +
    //     ' this time laid the foundations for my further work and studies.',
    //   dateFrom: new Date('2011'),
    //   dateTo: new Date('2015'),
    //   projectType: projectTypes.education,
    //   technologiesUsed: [
    //     bachalorSkills.critThinking,
    //     bachalorSkills.academicWriting,
    //     bachalorSkills.litAnalysis,
    //     bachalorSkills.lingTheory,
    //     bachalorSkills.hLangDev,
    //     bachalorSkills.neuroscience,
    //     bachalorSkills.devPsychology,
    //     bachalorSkills.socPsychology,
    //     bachalorSkills.statistics,
    //     bachalorSkills.scientificExperimentation,
    //     bachalorSkills.germanCult]
    // }

  ];


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
  }, {
    name: 'ApplecCare Technical Support',
    challengesAndOps: '',
    description: '',
    dateFrom: new Date('2015'),
    dateTo: new Date('2017'),
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
  }];

  constructor() { }

  getExperiences(): any[] {
    return this.experiences;
  }

  getMyTechs() {
    return [
      "Angular",
      "Springboot",
      "Maven",
      "Node",
      "Typescript",
      "Java",
      "Javascript",
      "Unity",
      "C#",
      "Rxjs",
      "HTML",
      "CSS",
      "SCSS/SASS",
      "SQL",
      "Postgresql",
      "PgAdmin",
      "CI/CD",
      "Git"
    ];
  }
}
