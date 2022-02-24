import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveQueryService {

  constructor() { }

  public getScreenWidth(): number {
    return window.innerWidth;
  }

  public isSmall(): boolean {
    return this.getScreenWidth() < 600;
  }

  public isMedium(): boolean {
    return this.getScreenWidth() > 600 && this.getScreenWidth() < 768;
  }

  public isLarge(): boolean {
    return this.getScreenWidth() > 768 && this.getScreenWidth() < 992;
  }

  public isXtraLarge(): boolean {
    return this.getScreenWidth() > 992;
  }

  public getSize(): SIZE {
    if (this.isSmall()) {
      return SIZE.SMALL;
    } else if (this.isMedium()) {
      return SIZE.MEDIUM;
    } else if (this.isLarge()) {
      return SIZE.LARGE;
    } else if (this.isXtraLarge()) {
      return SIZE.XLARGE;
    }
    console.warn("size of window not correctly recognized");
    return SIZE.MEDIUM
  }
}

export enum SIZE {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE
}
