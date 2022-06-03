import { Component, OnInit } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { CertUiService } from "../../services/cert-ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-certs-header',
  templateUrl: './certs-header.component.html',
  styleUrls: ['./certs-header.component.css']
})
export class CertsHeaderComponent implements OnInit {
  title: string = 'Certifications, Awards and Projects';
  faGraduationCap = faGraduationCap;
  show_add_cert!: boolean;
  subscription!: Subscription;

  constructor(private cert_ui_service:CertUiService) { 
    this.subscription = this.cert_ui_service.on_toggle_add_cert().subscribe((value) => (this.show_add_cert = value))
  }

  ngOnInit(): void {
  }

  toggle_add_certifications() {
    this.cert_ui_service.toggle_add_cert();
  }

}
