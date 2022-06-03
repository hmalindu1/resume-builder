import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WhoUiService {
  private show_add_who: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggle_add_who(): void {
    this.show_add_who = !this.show_add_who;
    this.subject.next(this.show_add_who)
  }

  on_toggle_add_who(): Observable<any> {
    return this.subject.asObservable();
  }
}
