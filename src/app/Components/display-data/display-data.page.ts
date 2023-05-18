import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/Services/data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { InfoPage } from '../info/info.page';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.page.html',
  styleUrls: ['./display-data.page.scss'],
})
export class DisplayDataPage implements OnInit {
public myArray:any;
public users:any;
public user:any;
  constructor(public sharedData:SharedService, private dataService:DataService,
    private modalCtrl:ModalController) {
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
  public async openUserData(user:any)
  {
    const modal =await this.modalCtrl.create({
      component:InfoPage,
      componentProps:{id:user.id},
      breakpoints:[0,0.50,0.8],
      initialBreakpoint:0.6
    });
    modal.present()
  }
 
  public updateUser()
  {
    // this.dataService.updateLinkedInConnectionData
  }
  public deleteUser()
  {

  }
}
