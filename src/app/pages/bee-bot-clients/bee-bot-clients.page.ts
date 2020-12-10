import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientDTO, ClientReference, RestService} from '../../services/rest.service';

@Component({
    selector: 'app-bee-bot-clients',
    templateUrl: './bee-bot-clients.page.html',
    styleUrls: ['./bee-bot-clients.page.scss'],
})
export class BeeBotClientsPage implements OnInit {

    uid: string;

    clients: ClientDTO[] = null;

    constructor(private route: ActivatedRoute, private rest: RestService) {
    }

    ngOnInit() {
        this.uid = this.route.snapshot.paramMap.get('uid');
        this.reload();
    }

    reload() {
        this.rest.botClientsDto(this.uid).subscribe(value => {
            this.clients = value;
        });
    }

}
