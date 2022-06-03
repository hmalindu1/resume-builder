import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from "../../Car";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  faCircleXmark = faCircleXmark;
  @Input() car!: Car;
  @Output() on_delete_car_i: EventEmitter<Car> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  on_delete(car: Car) {
    this.on_delete_car_i.emit(car)
  }

}
