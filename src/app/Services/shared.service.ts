import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public data:any
  public convertedData:any;
  platform: string;

 
  // public data:{name:string, profession:string, technology:string, city:string , priority:string, notes:String}
  constructor() {
    if (this.isMobile()) {
      this.platform = 'Mobile browser';
      console.log('here');
    } else if (this.isDesktop()) {
      this.platform = 'Desktop browser';
      console.log('here1');

    } else {
      this.platform = 'Other platform';
      console.log('here2');
    }
  }
  public ngOnInit() {
   
  }
  public isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  
  // Function to check if the platform is a desktop browser
  public isDesktop(): boolean {
    return !this.isMobile();
  }
}
