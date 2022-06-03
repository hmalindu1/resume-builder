import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarUiService {
  private show_add_car: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggle_add_car(): void {
    this.show_add_car = !this.show_add_car;
    this.subject.next(this.show_add_car)
  }

  on_toggle_add_car(): Observable<any> {
    return this.subject.asObservable();
  }
}