import { Component, OnInit } from '@angular/core';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CarUiService } from "../../services/car-ui.service";

@Component({
  selector: 'app-cars-header',
  templateUrl: './cars-header.component.html',
  styleUrls: ['./cars-header.component.css']
})
export class CarsHeaderComponent implements OnInit {
  title: string = 'Career Objective';
  faCrosshairs = faCrosshairs;
  show_add_car!: boolean;
  subscription!: Subscription;

  constructor(private car_ui_service:CarUiService) { 
    this.subscription = this.car_ui_service.on_toggle_add_car().subscribe((value) => (this.show_add_car = value))
  }

  ngOnInit(): void {
  }

  toggle_add_career() {
    this.car_ui_service.toggle_add_car();
  }

}
