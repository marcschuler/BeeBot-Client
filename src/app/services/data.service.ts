import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {LoginService, ServerState} from './login.service';
import {Entry} from '../components-server/generic-comp.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    beebots: ServerState[];



    BEEBOT_CONFIG: Entry[] = [
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
    ];

    constructor(public rest: RestService, public login: LoginService) {
        setTimeout(() => this.reloadBeeBots(), 2500);
    }

    reloadBeeBots() {
        if (this.login.login == null){
            setTimeout(() => this.reloadBeeBots(), 5000);
            return;
        }
        console.log('Reloading BeeBots');
        this.rest.get<ServerState[]>('beebot').subscribe(e => {
            this.beebots = e;
            console.log('Got ' + e.length + ' BeeBots');
        }, e => {
            setTimeout(() => this.reloadBeeBots(), 5000);
        });
    }


}
