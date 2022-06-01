import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Cont } from "../Cont";


@Injectable({
  providedIn: 'root'
})
export class ConstService {
  private api_url = 'http://localhost:5000/conts'

  constructor(private http:HttpClient) { }

  get_conts(): Observable<Cont[]> {
    return this.http.get<Cont[]>(this.api_url)
  }
}

