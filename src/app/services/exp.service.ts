import { Injectable } from '@angular/core';
import { Exp } from "../Exp";
import { EXPS } from "../mock-exp";

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor() { }

  get_exps(): Exp[] {
    return EXPS;
  }
}
