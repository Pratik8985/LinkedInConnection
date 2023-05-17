import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.page.html',
  styleUrls: ['./display-data.page.scss'],
})
export class DisplayDataPage implements OnInit {
public myArray:any;
public users:any;
  constructor(public sharedData:SharedService, private dataService:DataService) {
    this.dataService.fetchLinkedInConnectionNotes().subscribe((res)=>{
      this.users=res;
      console.log('users',this.users);
    })
   }
  

  ngOnInit() {
    // if(this.sharedData.data)
    // {
    // this.myArray=Object.entries(this.sharedData.data)
      
    // }
    // console.log('asdasd',this.myArray)
  }
  public openUserData(user:any)
  {

  }
 
}
