import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {RestService} from "../services/rest.service";
import {ActionSheetController, AlertController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-server-stats',
    templateUrl: './server-stats.page.html',
    styleUrls: ['./server-stats.page.scss'],
})
export class ServerStatsPage {

    stats: ServerStats = new ServerStats();

    interval: any;

    constructor(public login: LoginService, public rest: RestService,
                public router: Router,
                public data: DataService,
                public toast: ToastController, public actionController: ActionSheetController,
                public alertController: AlertController) {
    }

    ionViewWillEnter() {
        this.reload();
        this.interval = setInterval(() => this.reload(), 5000);
    }

    ionViewWillLeave(): void {
        clearInterval(this.interval);
    }

    reload() {
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
            message: 'Copied to clipboard',
            duration: 2000
        }).then(t => t.present());
    }


    openActions() {
        this.actionController.create({
            header: 'Server',
            buttons: [{
                text: 'Change Server',
                icon: 'create-outline',
                handler: () => this.delete()
            }]
        }).then(a => a.present());
    }

    delete() {
        this.alertController.create({
            header: 'Change Server?',
            subHeader: 'You can change back anytime',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                }, {
                    text: 'Change',
                    handler: () => {
                        console.log('Deleting server ' + this.login.login.server);
                        this.login.saveLogin(null);
                        this.router.navigateByUrl('/overview');
                        this.data.beebots=null;
                    }
                }
            ]
        }).then(a => a.present());
    }
}

export class ServerStats {
    os: string;
    docker: boolean;

    version: string;

    memoryUsed: number;
    memoryTotal: number;
}
