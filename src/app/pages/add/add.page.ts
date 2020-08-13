import { Component, OnInit } from '@angular/core';
import {WishesService} from '../../services/wishes.service';
import {ActivatedRoute} from '@angular/router';
import {List} from '../../models/list.model';
import {ListItem} from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  list: List;
  itemName = '';
  constructor(private wishService: WishesService, private route: ActivatedRoute) {
    const listId = this.route.snapshot.paramMap.get('id');

    if (listId) {
      this.list = this.wishService.loadList(listId);
    }

  }

  addItem() {
    if (this.itemName.length === 0) return;
    const newItem = new ListItem(this.itemName);
    this.list.items.push(newItem);

    this.itemName = '';
    this.wishService.saveStorage();
  }
  ngOnInit() {
  }

  checkChange(item: ListItem) {
    const pending = this.list.items.filter(item => !item.completed).length;
    if (pending === 0) {
      this.list.ended = new Date();
      this.list.completed = true;
    } else {
      this.list.ended = null;
      this.list.completed = false;
    }

    this.wishService.saveStorage();
  }

  delete(index: number) {
    this.list.items.splice(index, 1);
    this.wishService.saveStorage();
  }
}
