import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {RestService} from "../services/rest.service";
import {ToastController} from "@ionic/angular";

@Component({
    selector: 'app-server-stats',
    templateUrl: './server-stats.page.html',
    styleUrls: ['./server-stats.page.scss'],
})
export class ServerStatsPage {

    stats: ServerStats = new ServerStats();

    interval: any;

    constructor(public login: LoginService, public rest: RestService,public toast:ToastController) {
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


    copy(value: string) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = value;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);

        this.toast.create({
            message:'Copied to clipboard'
        }).then(t=>t.present());
    }
}

export class ServerStats {
    os: string;
    docker: boolean;

    version: string;

    memoryUsed: number;
    memoryTotal: number;
}
