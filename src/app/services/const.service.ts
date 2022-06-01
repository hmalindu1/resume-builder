import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Cont } from "../Cont";

const http_options = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})
export class ConstService {
  private api_url = 'http://localhost:5000/conts'

  constructor(private http:HttpClient) { }

  get_conts(): Observable<Cont[]> {
    return this.http.get<Cont[]>(this.api_url)
  }

  delete_cont_s(cont: Cont): Observable<Cont> {
    const url = `${this.api_url}/${cont.id}`;
    return this.http.delete<Cont>(url);
  }

  add_cont_s(cont: Cont): Observable<Cont> {
    return this.http.post<Cont>(this.api_url, cont, http_options)
  }
}

