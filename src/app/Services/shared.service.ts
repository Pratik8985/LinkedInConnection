import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public data:any
 
  // public data:{name:string, profession:string, technology:string, city:string , priority:string}
  constructor() { }
}
