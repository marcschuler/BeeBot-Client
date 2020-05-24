import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../services/rest.service";
import {ServerState, TeamspeakConfig} from "../services/login.service";

@Component({
    selector: 'app-beebot',
    templateUrl: './beebot.page.html',
    styleUrls: ['./beebot.page.scss'],
})
export class BeebotPage implements OnInit {

    uid: string;

    serverState: ServerState;

    modulesList: string[] = [];
    logs:WebLog[] = [];

    logTypes: string[] = ["INFO","WARNING","ERROR"];
    selectedTypes:string[] = ["ERROR"]

    constructor(public route: ActivatedRoute, public rest: RestService) {
    }

    ngOnInit() {
        this.serverState = new ServerState();
        this.serverState.teamspeakConfig = new TeamspeakConfig();
        this.serverState.online = true;

        this.uid = this.route.snapshot.paramMap.get('uid');
        this.rest.get<ServerState>('beebot/' + this.uid).subscribe(s => {
            this.serverState = s;
        })


        this.rest.get<WebLog[]>('beebot/' + this.uid + '/logs').subscribe(s => {
            this.logs = s.reverse();
        })
    }

    logChange(type: string) {
        if (this.selectedTypes.includes(type)){
            this.selectedTypes.splice(this.selectedTypes.indexOf(type),1);
        }else{
            this.selectedTypes.push(type);
        }
    }
}

export class WebLog {
    datetime: Date;
    type: string;
    message: string;
}
