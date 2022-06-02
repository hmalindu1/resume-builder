import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CertUiService {
  private show_add_cert: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggle_add_cert(): void {
    this.show_add_cert = !this.show_add_cert;
    this.subject.next(this.show_add_cert)
  }

  on_toggle_add_cert(): Observable<any> {
    return this.subject.asObservable();
  }
}
