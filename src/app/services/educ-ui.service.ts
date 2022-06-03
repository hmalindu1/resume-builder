import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EducUiService {
  private show_add_educ: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggle_add_educ(): void {
    this.show_add_educ = !this.show_add_educ;
    this.subject.next(this.show_add_educ)
  }

  on_toggle_add_educ(): Observable<any> {
    return this.subject.asObservable();
  }
}
