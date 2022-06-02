import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cert',
  templateUrl: './add-cert.component.html',
  styleUrls: ['./add-cert.component.css']
})
export class AddCertComponent implements OnInit {
  description!: string;
  url!: URL;

  constructor() { }

  ngOnInit(): void {
  }

}
