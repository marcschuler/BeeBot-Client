import {Component, Input, OnInit} from '@angular/core';
import {RestService, Violation, WorkerData} from "../../services/rest.service";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
    selector: 'app-module-info',
    templateUrl: './module-info.component.html',
    styleUrls: ['./module-info.component.scss'],
})
export class ModuleInfoComponent implements OnInit {

    @Input() worker: WorkerData;

    moduleInfo: any;

    expanded: number = 0;
    borderClass: any;

    config: any;
    violations: Violation[];

    constructor(public rest: RestService,
                public alertController: AlertController,
                public toastController: ToastController) {
    }

    ngOnInit() {
        this.update();
    }

    update() {
        this.updateData();
        this.rest.modulesWebValue(this.worker.moduleId).subscribe(i => this.moduleInfo = i);
        this.rest.botModuleConfig(this.worker.botId, this.worker.id).subscribe(i => this.config = i);
    }

    updateData() {
        let newClass = "borderGreen";
        const warnings = this.worker.logs.filter(log => log.type == "WARNING").length;
        const errors = this.worker.logs.filter(log => log.type == "ERROR").length;

        if (errors > 0)
            newClass = "borderRed";
        else if (warnings > 0)
            newClass = "borderYellow"

        this.borderClass = newClass;
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

    saveConfig() {
        this.rest.botModuleConfigChange(this.worker.botId, this.worker.id, this.config)
            .subscribe((vio) => {
                this.violations = vio;
                if (vio.length == 0) {
                    this.update();
                }
            });
    }
}
