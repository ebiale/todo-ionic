import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WishesService} from '../../services/wishes.service';
import {Router} from '@angular/router';
import {List} from '../../models/list.model';
import {AlertController, IonList} from '@ionic/angular';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

    @ViewChild(IonList) list: IonList;
    @Input() completed = true;

    constructor(public wishService: WishesService,
                private router: Router,
                private alertCtrl: AlertController) {
    }

    ngOnInit() {
    }

    selectList(listId) {
        const tab = this.completed ? 'tab2' : 'tab1';
        this.router.navigateByUrl(`/tabs/${tab}/add/${listId}`)
    }

    delete(list: List) {
        this.wishService.deleteList(list.id);
    }

    async update(list: List) {
        const alert = await this.alertCtrl.create({
            header: 'Edit List',
            inputs: [{
                name: 'title',
                type: 'text',
                value: list.title,
                placeholder: 'List name'
            }],
            buttons: [{
                text: 'Cancel',
                role: 'cancel'
            }, {
                text: 'Save',
                handler: (data) => {
                    if (data.title.length === 0) return;
                    list.title = data.title;
                    this.wishService.saveStorage();
                    this.list.closeSlidingItems;

                }
            }]
        });

        alert.present();
    }
}
