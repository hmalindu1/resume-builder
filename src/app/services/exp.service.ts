import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Exp } from "../Exp";
import { EXPS } from "../mock-exp";

@Injectable({
  providedIn: 'root'
})
export class ExpService {
  private api_url = 'http://localhost:5000/exps'

  constructor(private http:HttpClient) { }

  get_exps(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.api_url)
  }
}
