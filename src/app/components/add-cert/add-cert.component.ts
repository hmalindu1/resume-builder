import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cert } from 'src/app/Cert';
import { Subscription } from "rxjs";
import { CertUiService } from 'src/app/services/cert-ui.service';

@Component({
  selector: 'app-add-cert',
  templateUrl: './add-cert.component.html',
  styleUrls: ['./add-cert.component.css']
})
export class AddCertComponent implements OnInit {
  @Output() on_add_cert_a: EventEmitter<Cert> = new EventEmitter();
  description!: string;
  url!: string;
  show_add_cert!: boolean;
  subscription!: Subscription;

  constructor( private cert_ui_service:CertUiService) { 
    this.subscription = this.cert_ui_service.on_toggle_add_cert().subscribe((value) => (this.show_add_cert = value))
  }

  ngOnInit(): void {
  }

  on_submit() {
    if (!this.description && !this.url) {
      alert('Please add all the information');
      return;
    }

    const new_cert = {
      description: this.description,
      url: this.url,
      }

    this.on_add_cert_a.emit(new_cert)

    this.description = '';
    this.url = '';
  }

}
