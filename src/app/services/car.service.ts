import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Car } from "../Car";

const http_options = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private api_url = 'https://angular-crud-json-app.herokuapp.com/cars'


  constructor(private http:HttpClient) { }

  get_cars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.api_url)
  }

  delete_car_s(car: Car): Observable<Car> {
    const url = `${this.api_url}/${car.id}`;
    return this.http.delete<Car>(url);
  }

  add_car_s(car: Car): Observable<Car> {
    return this.http.post<Car>(this.api_url, car, http_options )
  }
}
