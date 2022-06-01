import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cont } from 'src/app/Cont';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cont-item',
  templateUrl: './cont-item.component.html',
  styleUrls: ['./cont-item.component.css']
})
export class ContItemComponent implements OnInit {
  faCircleXmark = faCircleXmark;
  faMobileScreenButton = faMobileScreenButton;
  faEnvelopeOpen = faEnvelopeOpen;
  faLocationDot = faLocationDot;
  @Input() cont!: Cont;
  @Output() on_delete_cont_i: EventEmitter<Cont> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  on_delete(cont: Cont) {
    this.on_delete_cont_i.emit(cont)
  }

}
