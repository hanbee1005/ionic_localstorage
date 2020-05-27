import {Component, OnInit} from '@angular/core';

import { NavController } from '@ionic/angular';

import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navController: NavController, private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.getItemList();
  }

  deleteItem(item) {
    this.storageService.deleteItem(item);
  }

  goDetail() {
    this.navController.navigateForward('detail');
  }

}
