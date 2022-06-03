import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Educ } from "../Educ";

const http_options = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducService {
  private api_url = 'http://localhost:5000/educs'


  constructor(private http:HttpClient) { }

  get_educs(): Observable<Educ[]> {
    return this.http.get<Educ[]>(this.api_url)
  }

  delete_educ_s(educ: Educ): Observable<Educ> {
    const url = `${this.api_url}/${educ.id}`;
    return this.http.delete<Educ>(url);
  }

  add_educ_s(educ: Educ): Observable<Educ> {
    return this.http.post<Educ>(this.api_url, educ, http_options )
  }
}
