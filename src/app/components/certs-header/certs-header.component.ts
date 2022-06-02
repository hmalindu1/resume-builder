import { Component, OnInit } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certs-header',
  templateUrl: './certs-header.component.html',
  styleUrls: ['./certs-header.component.css']
})
export class CertsHeaderComponent implements OnInit {
  title: string = 'Certifications and Awards';
  faGraduationCap = faGraduationCap;

  constructor() { }

  ngOnInit(): void {
  }

}
