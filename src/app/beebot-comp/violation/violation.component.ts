import {Component, Input, OnInit} from '@angular/core';
import {Violation} from "../../services/rest.service";

@Component({
  selector: 'app-violation',
  templateUrl: './violation.component.html',
  styleUrls: ['./violation.component.scss'],
})
export class ViolationComponent implements OnInit {

  @Input() violations:Violation[];

  constructor() { }

  ngOnInit() {}

}
