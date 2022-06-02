import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cert } from 'src/app/Cert';

@Component({
  selector: 'app-add-cert',
  templateUrl: './add-cert.component.html',
  styleUrls: ['./add-cert.component.css']
})
export class AddCertComponent implements OnInit {
  @Output() on_add_cert_a: EventEmitter<Cert> = new EventEmitter();
  description!: string;
  url!: URL;

  constructor() { }

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
