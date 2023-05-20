import { OverlayEventDetail } from '@ionic/core/components';
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { DataService } from '../Services/data.service';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal;
  constructor(private dataService:DataService,
    private authService:AuthService,
    private router:Router) {
    this.dataService.fetchLinkedInConnectionNotes().subscribe((res)=>{

    })
   }

  ngOnInit() {
  }

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  async logout()
  {
   await this.authService.logout();
   this.router.navigateByUrl('/login', {replaceUrl:true})
  }
}
