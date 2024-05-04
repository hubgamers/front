export class Region {
  region: string;
  
  language: string;
  
  timezone: string;
  
  constructor(region: string, language: string, timezone: string) {
    this.region = region;
    this.language = language;
    this.timezone = timezone;
  }
}
