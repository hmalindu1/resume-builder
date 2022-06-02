import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CertService {
  private api_url = 'http://localhost:5000/certs'

  constructor(private http:HttpClient) { }
}
