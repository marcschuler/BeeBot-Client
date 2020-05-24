import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {RestService} from "../services/rest.service";

@Component({
    selector: 'app-server-stats',
    templateUrl: './server-stats.page.html',
    styleUrls: ['./server-stats.page.scss'],
})
export class ServerStatsPage {

    stats: ServerStats = new ServerStats();

    interval: any;

    constructor(public login: LoginService, public rest: RestService) {
    }

    ionViewWillEnter() {
       this.reload();
       this.interval=setInterval(()=>this.reload(),5000);
    }
    ionViewWillLeave(): void {
        clearInterval(this.interval);
    }

    reload(){
        this.rest.get<ServerStats>('admin/stats').subscribe(s => {
            this.stats = s;
        });
    }



}

export class ServerStats {
    usedMemory: number;
    totalMemory: number;
}
