export class Experience {
  public title: string = "";
  public description: string = "";
  public technologiesUsed: {id: number, name: string}[] = [];
  public dateFrom: Date = new Date();
  public dateTo: Date = new Date();
  public current?: boolean;
  public location: string = "";
}
