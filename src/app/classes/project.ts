export class Project {

  public name: string = "";
  public description: string = ""
  public technologiesUsed: {id: number, name: string}[] = [];
  public projectType: string = ''
  public imageUrl?: string;
  public githubUrls?: string[];
  public accessUrl?: string;
  constructor() {
  }
}
