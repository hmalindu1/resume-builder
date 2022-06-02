import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
