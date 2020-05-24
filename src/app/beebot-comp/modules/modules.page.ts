import {Component, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {ServerStats} from "../../server-stats/server-stats.page";
import {ServerState} from "../../services/login.service";

@Component({
    selector: 'app-modules',
    templateUrl: './modules.page.html',
    styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {

    modules: ModuleDefinition[] = [];
    bots: ServerState[] = [];


    selectedBot: ServerState;
    selectedModule: ModuleDefinition;
    definition: any[] = [];
    moduleConfig: any = {};

    constructor(public rest: RestService) {
    }

    ngOnInit() {
        this.rest.get<ServerState[]>('beebot').subscribe(s => {
            this.bots = s;
        })
        this.rest.get<ModuleDefinition[]>('modules/list').subscribe(s => {
            this.modules = s;
            this.select(this.modules[0]);
        })
    }

    select(module: ModuleDefinition) {
        this.definition = [];
        console.log("Selecting " + module.name + " (" + module.id + ")");
        this.selectedModule = module;
        this.rest.get<any[]>('modules/webvalue/' + module.id).subscribe(s => {
            this.definition = s;
        })
    }

    selectBot($event: any) {
        this.selectedBot = $event.target.value;
        console.log("Select bot " + this.selectedBot.teamspeakConfig.name);
    }
}

export class ModuleDefinition {
    id: string;
    name: string;
}
