import { Component, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Experience';
  faBuilding = faBuilding;

  constructor() { }

  ngOnInit(): void {
  }

  toggle_add_experience() {
    console.log('toggle');
  }

}
