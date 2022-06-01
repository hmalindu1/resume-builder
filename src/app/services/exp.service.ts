import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Exp } from "../Exp";

const http_options = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExpService {
  private api_url = 'http://localhost:5000/exps'

  constructor(private http:HttpClient) { }

  get_exps(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.api_url)
  }

  delete_exp_s(exp: Exp): Observable<Exp> {
    const url = `${this.api_url}/${exp.id}`;
    return this.http.delete<Exp>(url);
  }

  add_exp_s(exp: Exp): Observable<Exp> {
    return this.http.post<Exp>(this.api_url, exp, http_options)
  }
}
