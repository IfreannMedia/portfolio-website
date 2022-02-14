import { SKILLS } from "../services/dummy-data.service";

export class Experience {
  public title: string = "";
  public description: string = "";
  public skills: SKILLS[] = [];
  public dateFrom: Date = new Date();
  public dateTo: Date = new Date();
  public current?: boolean;
  public location: string = "";
}
