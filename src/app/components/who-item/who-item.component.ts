import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Who } from "../../Who";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-who-item',
  templateUrl: './who-item.component.html',
  styleUrls: ['./who-item.component.css']
})
export class WhoItemComponent implements OnInit {
  faCircleXmark = faCircleXmark;
  @Input() who!: Who;
  @Output() on_delete_who_i: EventEmitter<Who> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  on_delete(who: Who) {
    this.on_delete_who_i.emit(who)
  }

}
