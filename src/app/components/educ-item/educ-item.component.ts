import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educ } from "../../Educ";
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educ-item',
  templateUrl: './educ-item.component.html',
  styleUrls: ['./educ-item.component.css']
})
export class EducItemComponent implements OnInit {
  faCircleDot = faCircleDot;
  faCircleXmark = faCircleXmark;
  @Input() educ!: Educ;
  @Output() on_delete_educ_i: EventEmitter<Educ> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  on_delete(educ: Educ) {
    this.on_delete_educ_i.emit(educ)
  }

}
