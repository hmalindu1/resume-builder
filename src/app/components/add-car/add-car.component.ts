import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { Car } from "../../Car";
import { CarUiService } from "../../services/car-ui.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Output() on_add_car_a: EventEmitter<Car> = new EventEmitter();
  des!: string;
  show_add_car!: boolean;
  subscription!: Subscription;

  constructor(private car_ui_service:CarUiService) { 
    this.subscription = this.car_ui_service.on_toggle_add_car().subscribe((value) => (this.show_add_car = value))
  }

  ngOnInit(): void {
  }

  on_submit() {
    if (!this.des) {
      alert('Please add all the information');
      return;
    }

    const new_car = {
      des!: this.des,
      }

    this.on_add_car_a.emit(new_car)

    this.des = '';
  }

}
