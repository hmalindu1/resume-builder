import { Component, OnInit } from '@angular/core';
import { CertService } from "../../services/cert.service";
import { Cert } from "../../Cert";

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent implements OnInit {
  certs: Cert[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
