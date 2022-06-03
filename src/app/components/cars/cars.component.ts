import { Component, OnInit } from '@angular/core';
import { CarService } from "../../services/car.service";
import { Car } from "../../Car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private car_service: CarService) { }

  ngOnInit(): void {
    this.car_service.get_cars().subscribe((cars) =>(this.cars = cars))
  }

  delete_car(car: Car) {
    this.car_service.delete_car_s(car).subscribe(() => (this.cars = this.cars.filter((e) => e.id !== car.id)));
  }

  add_car(car: Car) {
    this.car_service.add_car_s(car).subscribe((car) => (this.cars.push(car)))
  }

}