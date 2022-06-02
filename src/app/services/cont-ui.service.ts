import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContUiService {
  private show_add_cont: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggle_add_cont(): void {
    this.show_add_cont = !this.show_add_cont;
    this.subject.next(this.show_add_cont)
  }

  on_toggle_add_cont(): Observable<any> {
    return this.subject.asObservable();
  }
}
