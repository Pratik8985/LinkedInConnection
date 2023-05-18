import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  constructor(private dataService:DataService, private modalCtrl:ModalController) { }

  ngOnInit() {
    this.dataService.fetchLinkedInConnectionById(this.id).subscribe((res)=>{
      this.user=res;
    })
    
  }

}
