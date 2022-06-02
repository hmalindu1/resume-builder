import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Cert } from '../Cert';

const http_options = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json' 
  })
}


@Injectable({
  providedIn: 'root'
})
export class CertService {
  private api_url = 'http://localhost:5000/certs'

  constructor(private http:HttpClient) { }

  get_certs(): Observable<Cert[]> {
    return this.http.get<Cert[]>(this.api_url)
  }

  add_cert_s(cert: Cert): Observable<Cert> {
    return this.http.post<Cert>(this.api_url, cert, http_options )
  }
}
