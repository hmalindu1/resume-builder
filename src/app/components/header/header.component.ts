import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Experience';

  constructor() { }

  ngOnInit(): void {
  }

  toggle_add_experience() {
    console.log('toggle');
  }

}
