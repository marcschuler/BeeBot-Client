import {Component, Input, OnInit, Output} from '@angular/core';
import {Entry} from "../generic-comp.service";

@Component({
  selector: 'app-comp-generic',
  templateUrl: './comp-generic.component.html',
  styleUrls: ['./comp-generic.component.scss'],
})
export class CompGenericComponent implements OnInit {

  @Input() entries:any[] = [];
  @Input() errors:any[] = []; //we want the path
  @Input() object: any= {};

  constructor() { }

  ngOnInit() {}

}
