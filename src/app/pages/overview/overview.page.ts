import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.page.html',
    styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

    changelogs = [
        {
            version: '0.12.0',
            date: 'Dec 2020',
            entries: [
                '+ Client and Stats pages'
            ]
        },
        {
            version: '0.6.1',
            date: 'June 2020',
            entries: [
                '+ Fixed UI Bug'
            ]
        },
        {
            version: '0.6.0',
            date: 'June 2020',
            entries: [
                '+ Better module mangement'
            ]
        },
        {
            version: '0.5.0',
            date: 'May 2020',
            entries: [
                '+ Added basic functionality',
                '+ First Release'
            ]
        }
    ];
    selectedChangelog = 0;

    constructor(public login: LoginService) {
    }

    ngOnInit() {
    }

    nextChangelog() {
        this.selectedChangelog++;
    }

    lastChangelog() {
        this.selectedChangelog--;
    }
}
