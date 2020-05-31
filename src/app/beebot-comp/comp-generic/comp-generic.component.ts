import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Entry} from "../generic-comp.service";
import {ChannelReference, ClientReference, GroupReference, RestService} from "../../services/rest.service";

@Component({
    selector: 'app-comp-generic',
    templateUrl: './comp-generic.component.html',
    styleUrls: ['./comp-generic.component.scss'],
})
export class CompGenericComponent implements OnInit, OnChanges {

    @Input() entries: any[] = [];
    @Input() errors: any[] = []; //we want the path
    @Input() object: any = {};

    _uid: string;


    channels: ChannelReference[] = [];
    clients: ClientReference[] = [];
    groupsServer: GroupReference[] = [];
    groupsChannel: GroupReference[] = [];

    constructor(public rest: RestService) {
    }

    ngOnInit() {
        this.update();
    }

    @Input()
    set uid(uid: string) {
        if (uid == this._uid)
            return;
        this._uid = uid;
        this.update();
    }

    get uid(): string {
        return this._uid
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.ngOnInit();
    }

    update() {
        console.log("loading comp data for Bot " + this.uid)
        this.channels = [];
        this.clients = [];
        this.groupsServer = [];
        this.groupsChannel = [];

        if (this.uid != null) {
            this.rest.botChannels(this.uid).subscribe(c => this.channels = c);
            this.rest.botClients(this.uid).subscribe(c => this.clients = c);
            this.rest.botGroupsServer(this.uid).subscribe(g => this.groupsServer = g);
            this.rest.botGroupsChannel(this.uid).subscribe(g => this.groupsChannel = g);
        }
    }

}

