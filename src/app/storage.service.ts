import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  itemList = [];

  constructor(private storage: Storage) { }

  saveItemList() {
    this.storage.set('itemList', this.itemList).then(() => {
      console.log('save complete!');
    });
  }

  addItem(item) {
    this.itemList.push(item);
    this.saveItemList();
  }

  getItemList() {
    this.storage.get('itemList').then(result => {
      if (result) {
        this.itemList = result;
      }
    });
  }

  deleteItem(item) {
    this.itemList.splice(this.itemList.indexOf(item), 1);
    this.saveItemList();
  }
}
