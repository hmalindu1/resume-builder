import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpUiService {
  private show_add_exp: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggle_add_exp(): void {
    this.show_add_exp = !this.show_add_exp;
    this.subject.next(this.show_add_exp)
  }

  on_toggle_add_exp(): Observable<any> {
    return this.subject.asObservable();
  }
}
