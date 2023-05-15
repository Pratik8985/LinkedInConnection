import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.page.html',
  styleUrls: ['./display-data.page.scss'],
})
export class DisplayDataPage implements OnInit {

  constructor(public sharedData:SharedService) { }

  ngOnInit() {
  }

}
