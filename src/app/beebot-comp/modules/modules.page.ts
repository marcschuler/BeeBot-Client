import {Component, OnInit} from '@angular/core';
import {RestService, Violation} from "../../services/rest.service";
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

    violations:Violation[];

    constructor(public rest: RestService) {
    }

    ngOnInit() {
        this.rest.get<ServerState[]>('beebot').subscribe(s => {
            this.bots = s;
            if(s.length>0)
                this.selectedBot = s[0];
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
        this.rest.modulesWebValue(module.id).subscribe(s=>this.definition=s);

    }

    selectBot($event: any) {
        this.selectedBot = $event.target.value;
        console.log("Select bot " +JSON.stringify(this.selectedBot));
    }

    create() {
        this.rest.botModuleCreate(this.selectedBot.id,this.selectedModule.id,this.moduleConfig).subscribe(v =>{
           this.violations = v;
        });
    }
}

export class ModuleDefinition {
    id: string;
    name: string;
}
