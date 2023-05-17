import { OverlayEventDetail } from '@ionic/core/components';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { SharedService } from 'src/app/Services/shared.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-collect-data',
  templateUrl: './collect-data.page.html',
  styleUrls: ['./collect-data.page.scss'],
})
export class CollectDataPage implements OnInit {
  currentFood = undefined;
  public priorities=['Very Important', 'Important', 'Medium', 'Low']
  @ViewChild(IonModal) modal: IonModal;
  constructor(private sharedData:SharedService,
    private dataService:DataService) { }

  ngOnInit() {
  }

  handleChange(ev:any) {
    this.currentFood = ev.target.value;
    console.log(' this.currentFood', this.currentFood);
  }
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  public profession:string;
  public technology:string;
  public city:string;
  public importance:string;
  public notes:string;
  public data:any;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.sharedData.data={
      'name':this.name,
      'profession':this.profession,
      'technology':this.technology,
      'city':this.city,
      'priority':this.importance,
      'notes':this.notes
    }
    this.modal.dismiss(this.name, 'confirm');
    console.log(this.profession, this.name,this.city,this.technology, this.importance);
    console.log('this.data',this.sharedData.data);
    this.sharedData.convertedData=Object.entries(this.sharedData.data)
    this.dataService.addLinkedInConnection({name:this.name, profession:this.profession,technology:this.technology,
      city:this.city, priority:this.importance,notes:this.notes})
    this.name='';
    this.profession='';
    this.technology='';
    this.city='';
    this.importance='';
    this.notes='';
    
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
