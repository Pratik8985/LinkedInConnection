import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LinkedInConnection } from 'src/app/Services/data.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
@Input() id:string;
user:LinkedInConnection;
  constructor(private dataService:DataService, private modalCtrl:ModalController,
    public toastCtrl:ToastController) { }

  ngOnInit() {
    this.dataService.fetchLinkedInConnectionById(this.id).subscribe((res)=>{
      this.user=res;
    })
    
  }
  public async updateUser()
  {
    this.dataService.updateLinkedInConnectionData(this.user);
    this.modalCtrl.dismiss();
    const toast=await this.toastCtrl.create({
      message:'User Details Updated',
      duration:1500
    });
    toast.present();
  }
  public deleteUser()
  {
    this.dataService.deleteLinkedInConnection(this.user)
    this.modalCtrl.dismiss();

  }
}
