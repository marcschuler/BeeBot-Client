import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Entry} from '../generic-comp.service';
import {ChannelReference, ClientReference, GroupReference, RestService} from '../../services/rest.service';

@Component({
    selector: 'app-comp-generic',
    templateUrl: './comp-generic.component.html',
    styleUrls: ['./comp-generic.component.scss'],
})
export class CompGenericComponent implements OnInit, OnChanges {

    @Input() entries: any[] = [];
    @Input() errors: any[] = []; // we want the path
    @Input() object: any = {};

    _uid: string;


    channels: ChannelReference[] = [];
    clients: ClientReference[] = [];
    groupsServer: GroupReference[] = [];
    groupsChannel: GroupReference[] = [];


    loaded = true;

    constructor(public rest: RestService) {
    }

    ngOnInit() {
    }

    @Input()
    set uid(uid: string) {
        if (uid == this._uid) {
            return;
        }
        this._uid = uid;
        if (uid != undefined) {
            this.update();
        }
    }

    get uid(): string {
        return this._uid;
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    async update() {
        console.log('loading comp data for Bot ' + this.uid);
        this.channels = [];
        this.clients = [];
        this.groupsServer = [];
        this.groupsChannel = [];

        if (this.uid != null) {
            this.loaded = false;
            Promise.all([
                this.rest.botChannels(this.uid).toPromise().then(c => this.channels = c),
                this.rest.botClients(this.uid).toPromise().then(c => this.clients = c),
                this.rest.botGroupsServer(this.uid).toPromise().then(g => this.groupsServer = g),
                this.rest.botGroupsChannel(this.uid).toPromise().then(g => this.groupsChannel = g)
            ]).then(() => this.loaded = true);
        } else {
            this.loaded = true;
        }
    }

}

