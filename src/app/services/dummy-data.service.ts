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

export enum SKILLS {
  ANGULAR = "Angular",
  TYPESCRIPT = "Typescript",
  JAVA_EE = "Java EE",
  SPRINGBOOT = "Springboot",
  POSTGRESQL = "Postgresql",
  JENKINS = "Jenkins",
  BITBUCKET = "Bitbucket",
  SONAR = "SonarQube",
  SSH = "SSH",
  GLASSFISH = "Glassfish",
  PAYARA = "Payara",
  ITSM = "ITSM",
  JIRA = "JIRA",
  CONFLUENCE = "Confluence",
  UNITY = "Unity",
  C_SHARP = "C#",
  IONIC = "Ionic",
  XCODE = "Xcode",
  LIFERAY = "Liferay",
  ORACLE_SQL = "Oracle SQL",
  SCSS = "SCSS",
  SASS = "SASS",
  CSS = "CSS",
  JAVASCRIPT = "Javascript",
  HTML = "HTML",
  REACT = "REACT",
  EXPRESS = "EXPRESS"
}

export enum projectTypes {
  personal = 'personal',
  education = 'education'
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
      skills: [SKILLS.ANGULAR, SKILLS.TYPESCRIPT, SKILLS.JAVA_EE, SKILLS.SPRINGBOOT, SKILLS.POSTGRESQL, SKILLS.JENKINS,
      SKILLS.SONAR, SKILLS.SSH, SKILLS.GLASSFISH, SKILLS.PAYARA, SKILLS.ITSM, SKILLS.JIRA, SKILLS.BITBUCKET, SKILLS.CONFLUENCE],
      dateFrom: new Date('2021-10-01'),
      dateTo: new Date(Date.now()),
      location: "Munich",
      current: true
    },
    {
      title: "Akka",
      description: "During my time at Akka I worked on two large scale web applications for a client in the automotive industry. My first role was as a frontend dev, working on a " +
        "cross platform SPA targeting Iphones, Chrome, and Android, buit with Ionic, Angular, and Typescript. It was deployed in many " +
        "countries. As well as planning and developing features, I had the honour of migrating the frontend from Angular 5 to Angular 11. Soon after I began work " +
        "as a full stack developer on a large scale web portal for materials and tools management built with Liferay. " +
        "Business communications were primarily carried out in German, I got to work with some excellent colleagues too.",
      skills: [SKILLS.ANGULAR, SKILLS.TYPESCRIPT, SKILLS.IONIC, SKILLS.XCODE, SKILLS.JAVA_EE, SKILLS.ORACLE_SQL, SKILLS.JENKINS,
      SKILLS.SONAR, SKILLS.SSH, SKILLS.GLASSFISH, SKILLS.ITSM, SKILLS.JIRA, SKILLS.BITBUCKET, SKILLS.CONFLUENCE],
      dateFrom: new Date('2019-04-01'),
      dateTo: new Date('2021-09-30'),
      location: "Munich"
    }
  ];

  public projects: Project[] = [
    {
      name: "Portfolio site",
      description: "A developr should have a website right? That's why I threw this one pager together. I built it using Angular, Typescript, and scss",
      technologiesUsed: [SKILLS.ANGULAR, SKILLS.TYPESCRIPT, SKILLS.SCSS],
      projectType: "",
      imageUrl: "",
      githubUrl: "https://github.com/IfreannMedia/portfolio-website"
    },
    {
      name: "Chuck Norris Joke Machine",
      description: "This website makes use of the web browser's speech recognition and speech synthesis APIs, you'll probably need the latest version of Chrome to use it. " +
        "Working with Angular and React motivated me to go back to basics and develop a website using plain old HTML Javascript and CSS. Though I did use tailwind to" +
        " speed up the styling.",
      technologiesUsed: [SKILLS.HTML, SKILLS.JAVASCRIPT, SKILLS.CSS],
      projectType: "",
      imageUrl: "",
      githubUrl: "",
      accessUrl: "https://chuck-can-hear-you.herokuapp.com/",
    },
    {
      name: "Smart Brain Image Scan",
      description: "I decided to give React a test drive and used it to create this web app. The backend was built using express, and the app allows users to create accounts utilize " +
      "a face recognition API on pictures to detect faces.",
      technologiesUsed: [SKILLS.REACT, SKILLS.EXPRESS, SKILLS.POSTGRESQL, SKILLS.HTML, SKILLS.JAVASCRIPT, SKILLS.CSS],
      projectType: "",
      imageUrl: "../../../assets/images/face_recog.png",
      githubUrl: "",
      accessUrl: "https://face-recog-fe.herokuapp.com/",
    },
    {
      name: "Invasion",
      description: "Invasion is a 3D shoot em up game I designed and developed using the Unity engine and C#. It was the final deliverable for my MSc. I programmed the player character, all mecchanics and UIs, the scoring system, " +
      "level management, and the enemy AI. I also created the 3D modely in blender, and animated the player character. Not just coding, but plenty of UX went into the iterative prototyping and development of this artefact" +
      "of the game.",
      technologiesUsed: [SKILLS.UNITY, SKILLS.C_SHARP],
      projectType: "",
      imageUrl: "../../../assets/images/invasion_cover.png",
      githubUrl: "",
      accessUrl: "https://ifreannmedia.itch.io/invasion",
    },
    {
      name: "Cyber Ryder",
      description: "Cyber Ryder is a 3D cyber themed racing game I developed as a mini-project during my masters.",
      technologiesUsed: [SKILLS.UNITY, SKILLS.C_SHARP],
      projectType: "",
      imageUrl: "../../../assets/images/cyber_ryder_cover.png",
      githubUrl: "",
      accessUrl: "https://ifreannmedia.itch.io/cyber-ryder",
    },
    {
      name: "Demonic 5",
      description: "Demonic 5 was a 2D narrative/turn based combat game I developed using the unity game engine, the fungus dialogue system and C#.",
      technologiesUsed: [SKILLS.UNITY, SKILLS.C_SHARP],
      projectType: "",
      imageUrl: "../../../assets/images/demonic_five_cover.png",
      githubUrl: "",
      accessUrl: "https://ifreannmedia.itch.io/demonic-five",
    },
  ];

  constructor() { }

  getExperiences(): any[] {
    return this.experiences;
  }

  getProjects(): Project[] {
    return this.projects;
  }
}
