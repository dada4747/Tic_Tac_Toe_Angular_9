import { Component, OnInit,Input } from '@angular/core';
import {faPen,faTimes} from "@fortawesome/free-solid-svg-icons"
import {faCircle} from "@fortawesome/free-regular-svg-icons"


@Component({
  selector: 'app-iconny',
  templateUrl: './iconny.component.html',
  styleUrls: ['./iconny.component.css']
})
export class IconnyComponent implements OnInit {
  @Input() iconName: string;
  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
