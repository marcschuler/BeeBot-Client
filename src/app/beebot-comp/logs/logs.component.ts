import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {


  logTypes: string[] = ["INFO","WARNING","ERROR"];
  selectedTypes:string[] = ["INFO","WARNING","ERROR"];

  @Input() _logs:any[] = [];

  constructor() { }

  ngOnInit() {}

  @Input()
  set logs(logs: any[]){
    this._logs = logs;
  }

  get logs(){return this._logs}

  logChange(type: string) {
    if (this.selectedTypes.includes(type)){
      this.selectedTypes.splice(this.selectedTypes.indexOf(type),1);
    }else{
      this.selectedTypes.push(type);
    }
  }


}
