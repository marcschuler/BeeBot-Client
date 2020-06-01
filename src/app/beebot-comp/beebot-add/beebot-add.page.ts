import {Component, OnInit} from '@angular/core';
import {Entry} from "../generic-comp.service";
import {TeamspeakConfig} from "../../services/login.service";
import {RestService, Violation} from "../../services/rest.service";
import {DataService} from "../../services/data.service";
import {isArray} from "util";

@Component({
    selector: 'app-beebot-add',
    templateUrl: './beebot-add.page.html',
    styleUrls: ['./beebot-add.page.scss'],
})
export class BeebotAddPage implements OnInit {

    teamspeakConfig: TeamspeakConfig = new TeamspeakConfig();


    state = 0;
    violations: Violation[];

    constructor(public rest: RestService, public data: DataService) {
    }

    ngOnInit() {
    }

    create() {
        this.state = 1;
        this.rest.put<any[]>('beebot', this.teamspeakConfig).subscribe(s => {
            if (s.length>0){
                this.state=3;
                this.violations = s;
            }
            this.state = 2;
            this.data.reloadBeeBots();
        }, error => {
            this.state = 3;
        })
    }
}
