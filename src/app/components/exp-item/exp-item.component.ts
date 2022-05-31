import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exp } from 'src/app/Exp';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent implements OnInit {
  faCircleDot = faCircleDot;
  faCircle = faCircle;
  faCircleXmark = faCircleXmark;
  @Input()
  exp!: Exp;
  @Output() on_delete_exp_i: EventEmitter<Exp> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  on_delete(exp: Exp) {
    this.on_delete_exp_i.emit(exp)
  }

}
