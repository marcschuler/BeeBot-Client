import {Component, OnInit} from '@angular/core';
import {ClientDTO, RestService} from '../../services/rest.service';
import {ActivatedRoute} from '@angular/router';
import {Chart} from 'chart.js';
import 'chartjs-plugin-colorschemes';
import {Tableau20} from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';

@Component({
    selector: 'app-bee-bot-graphs',
    templateUrl: './bee-bot-graphs.page.html',
    styleUrls: ['./bee-bot-graphs.page.scss'],
})
export class BeeBotGraphsPage implements OnInit {

    uid: string;

    clients: ClientDTO[] = null;

    constructor(private route: ActivatedRoute, private rest: RestService) {
    }

    ngOnInit() {
        this.uid = this.route.snapshot.paramMap.get('uid');
        this.reload();
    }

    reload() {
        this.rest.botClientsDto(this.uid).subscribe(value => {
            this.clients = value;
            this.reloadCharts();
        });
    }

    reloadCharts() {
        //data per country
        const countryData = this.prepareSimpleChartData(this.clients.map(c => c.country).sort());
        this.generatePieChart('stat-country', countryData);

        //data per platform
        const platformData = this.prepareSimpleChartData(this.clients.map(c => c.platform).sort());
        this.generatePieChart('stat-platform', platformData);

        //data per version
        const versionData = this.prepareSimpleChartData(this.clients.map(c => {
            const version = c.version; //Remove "[build 123456789]" after version tag
            return (version.indexOf('Build') !== -1 ? version.substr(0, version.indexOf(' ')) : version);
        }).sort());
        this.generatePieChart('stat-version', versionData);
    }

    private generatePieChart(id, data) {

        new Chart(id, {
            type: 'pie',
            data: {
                labels: data.names,
                datasets: [
                    {
                        data: data.values
                    }
                ]
            },
            options: {
                plugins: {
                    colorschemes: {
                        scheme: Tableau20
                    }
                }
            }
        });
    }

    private prepareSimpleChartData(array: any[]) {
        const names = this.uniqueValues(array);
        const values = names.map(n => this.countOccurences(array, n));

        return {
            names,
            values
        };
    }

    private uniqueValues(array: any[]) {
        return [...new Set(array)];
    }

    private countOccurences(array: any[], search: string) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === search) {
                count++;
            }
        }
        return count;
    }

    private pseudoreandomColor(value: any[]) {

    }

}
