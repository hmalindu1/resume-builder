import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Cert } from '../Cert';


@Injectable({
  providedIn: 'root'
})
export class CertService {
  private api_url = 'http://localhost:5000/certs'

  constructor(private http:HttpClient) { }

  get_certs(): Observable<Cert[]> {
    return this.http.get<Cert[]>(this.api_url)
  }
}
