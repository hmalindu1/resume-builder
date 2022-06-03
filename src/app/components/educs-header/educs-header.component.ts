import { Component, OnInit } from '@angular/core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-educs-header',
  templateUrl: './educs-header.component.html',
  styleUrls: ['./educs-header.component.css']
})
export class EducsHeaderComponent implements OnInit {
  title: string = 'Education';
  faUserGraduate = faUserGraduate;

  constructor() { }

  ngOnInit(): void {
  }

}
