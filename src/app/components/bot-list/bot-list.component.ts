import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {LoginService} from '../../services/login.service';

@Component({
    selector: 'app-bot-list',
    templateUrl: './bot-list.component.html',
    styleUrls: ['./bot-list.component.scss'],
})
export class BotListComponent implements OnInit {

    selectedBotId: string = null;

    constructor(public data: DataService, public login: LoginService) {
    }

    ngOnInit() {
    }

}
