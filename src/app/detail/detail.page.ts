import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { StorageService } from '../storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  name: string;

  constructor(private navController: NavController, private storageService: StorageService) { }

  ngOnInit() {
  }

  saveItem() {
    const item = {name: this.name};
    this.storageService.addItem(item);
    this.navController.navigateBack('home');
  }

}
