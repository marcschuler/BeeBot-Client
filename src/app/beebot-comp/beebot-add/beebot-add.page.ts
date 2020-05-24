import {Component, OnInit} from '@angular/core';
import {Entry} from "../generic-comp.service";
import {TeamspeakConfig} from "../../services/login.service";
import {RestService} from "../../services/rest.service";
import {DataService} from "../../services/data.service";
import {isArray} from "util";

@Component({
    selector: 'app-beebot-add',
    templateUrl: './beebot-add.page.html',
    styleUrls: ['./beebot-add.page.scss'],
})
export class BeebotAddPage implements OnInit {


    entries: Entry[] = [
        {
            name: 'name',
            type: 'String',
            defaultValue: 'Server name',
            description: ''
        },
        {
            name: 'host',
            type: 'String',
            defaultValue: '127.0.0.1',
            description: 'The Teamspeak servers IP address'
        }, {
            name: 'username',
            type: 'String',
            defaultValue: 'serveradmin',
            description: ''
        }, {
            name: 'password',
            type: 'String',
            defaultValue: '',
            description: ''
        }, {
            name: 'virtualServer',
            description: '',
            defaultValue: '1',
            type: 'int'
        }, {
            name: 'flood',
            type: 'Boolean',
            defaultValue: 'false',
            description: ''
        }, {
            name: 'nickname',
            description: '',
            defaultValue: 'BeeBot@karlthebee',
            type: 'String'
        }
    ]
    teamspeakConfig: TeamspeakConfig = new TeamspeakConfig();


    state = 0;
    errors: any[]=[];

    constructor(public rest: RestService, public data: DataService) {
    }

    ngOnInit() {
    }

    create() {
        this.state = 1;
        this.rest.put<any[]>('beebot', this.teamspeakConfig).subscribe(s => {
            if (s.length>0){
                this.state=3;
                this.errors = s;
            }
            this.state = 2;
            this.data.reloadBeeBots();
        }, error => {
            this.state = 3;
        })
    }
}
