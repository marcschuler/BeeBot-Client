import {Component, Input, OnInit} from '@angular/core';
import {RestService, WorkerData} from "../../services/rest.service";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
    selector: 'app-module-info',
    templateUrl: './module-info.component.html',
    styleUrls: ['./module-info.component.scss'],
})
export class ModuleInfoComponent implements OnInit {

    @Input() worker: WorkerData;

    moduleInfo:any;
    moduleData:any;

    expanded = false;

    constructor(public rest: RestService,
                public alertController: AlertController,
                public toastController: ToastController) {
    }

    ngOnInit() {
        console.log(JSON.stringify(this.worker))
        this.rest.modulesWebValue(this.worker.moduleId).subscribe(i => this.moduleInfo=i);
        this.rest.botModule(this.worker.botId,this.worker.id).subscribe(i => this.moduleData=i);
    }

    delete() {
        this.alertController.create({
            header: 'Delete Module?',
            subHeader: 'You cannot change this anymore',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                }, {
                    text: 'Delete',
                    handler: () => {
                        console.log('Deleting module' + this.worker.id);
                        this.rest.botModulesDelete(this.worker.botId, this.worker.id).subscribe(s => {
                            this.toastController.create({
                                message: 'Module deleted'
                            }).then(t => t.present());
                        });
                    }
                }
            ]
        }).then(a => a.present());
    }
}
