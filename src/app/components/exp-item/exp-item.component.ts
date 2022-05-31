import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}