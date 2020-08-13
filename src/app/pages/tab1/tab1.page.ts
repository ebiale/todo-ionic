import {Component} from '@angular/core';
import {WishesService} from '../../services/wishes.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public wishService: WishesService,
              private router: Router,
              private alertCtrl: AlertController) {

  }

  async addList() {

    const alert = await this.alertCtrl.create({
      header: 'New List',
      inputs: [{
        name: 'title',
        type: 'text',
        placeholder: 'List name'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Create',
        handler: (data) => {
          if (data.title.length === 0) return;
          const listId = this.wishService.createList(data.title);
          this.router.navigateByUrl(`/tabs/tab1/add/${listId}`)

        }
      }]
    });

    alert.present();
  }

}
