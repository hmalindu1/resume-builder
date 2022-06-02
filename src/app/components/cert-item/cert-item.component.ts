import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cert } from "../../Cert";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cert-item',
  templateUrl: './cert-item.component.html',
  styleUrls: ['./cert-item.component.css']
})
export class CertItemComponent implements OnInit {
  faCircle = faCircle;
  faCircleXmark = faCircleXmark;
  @Input() cert!: Cert;
  @Output() on_delete_cert_i: EventEmitter<Cert> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  on_delete(cert: Cert) {
    this.on_delete_cert_i.emit(cert)
  }

}
