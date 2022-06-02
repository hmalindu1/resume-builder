import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertService {
  private api_url = 'http://localhost:5000/certs'

  constructor() { }
}
