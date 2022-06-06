import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Who } from "../Who";

const http_options = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})
export class WhoService {
  private api_url = 'https://angular-crud-json-app.herokuapp.com/whos'


  constructor(private http:HttpClient) { }

  get_whos(): Observable<Who[]> {
    return this.http.get<Who[]>(this.api_url)
  }

  delete_who_s(who: Who): Observable<Who> {
    const url = `${this.api_url}/${who.id}`;
    return this.http.delete<Who>(url);
  }

  add_who_s(who: Who): Observable<Who> {
    return this.http.post<Who>(this.api_url, who, http_options )
  }
}
