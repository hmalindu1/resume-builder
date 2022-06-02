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

  constructor(private cert_service: CertService) { }

  ngOnInit(): void {
    this.cert_service.get_certs().subscribe((certs) =>(this.certs = certs))
  }

  delete_cert(cert: Cert) {
    this.cert_service.delete_cert_s(cert).subscribe(() => (this.certs = this.certs.filter((e) => e.id !== cert.id)));
  }

  add_cert(cert: Cert) {
    this.cert_service.add_cert_s(cert).subscribe((cert) => (this.certs.push(cert)))
  }

}
