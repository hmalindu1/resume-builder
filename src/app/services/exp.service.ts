import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Exp } from "../Exp";
import { EXPS } from "../mock-exp";

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor() { }

  get_exps(): Observable<Exp[]> {
    const exps = of (EXPS);
    return exps;
  }
}
