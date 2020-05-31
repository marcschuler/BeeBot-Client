import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestService, WorkerData} from "../services/rest.service";
import {ServerState, TeamspeakConfig} from "../services/login.service";
import {ActionSheetController, AlertController} from "@ionic/angular";
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-beebot',
    templateUrl: './beebot.page.html',
    styleUrls: ['./beebot.page.scss'],
})
export class BeebotPage implements OnInit {

    uid: string;

    serverState: ServerState;
    worker: WorkerData[] = [];

    modulesList: string[] = [];
    logs:WebLog[] = [];


    constructor(public route: ActivatedRoute, public router:Router,
                public rest: RestService, public data:DataService,
                public actionController: ActionSheetController, public alertController:AlertController) {
    }

    ngOnInit() {
        this.serverState = new ServerState();
        this.serverState.teamspeakConfig = new TeamspeakConfig();
        this.serverState.online = true;

        this.uid = this.route.snapshot.paramMap.get('uid');
        this.rest.get<ServerState>('beebot/' + this.uid).subscribe(s => { this.serverState = s;})
        this.rest.get<WebLog[]>('beebot/' + this.uid + '/logs').subscribe(s => {this.logs = s.reverse();})
        this.rest.botModules(this.uid).subscribe(s => this.worker = s);
    }

    openActions(){
        this.actionController.create({
            header: 'BeeBot',
            buttons:[{
                text: 'Delete',
                icon: 'trash',
                handler: ()=> this.delete()
            }]
        }).then(a => a.present());
    }

    delete(){
        this.alertController.create({
                header:'Delete BeeBot?',
            subHeader:'You cannot change this anymore',
            buttons:[
               {
                    text:'Cancel',
                    role:'cancel'
                }, {
                    text:'Delete',
                    handler: ()=>{
                        console.log('Deleting BeeBot ' + this.uid)
                        this.rest.delete('beebot/' + this.uid).subscribe(()=>{
                            this.router.navigateByUrl('/')
                            this.data.reloadBeeBots();
                        });
                    }
                }
            ]
        }).then(a => a.present());
    }
}

export class WebLog {
    datetime: Date;
    type: string;
    message: string;
}
