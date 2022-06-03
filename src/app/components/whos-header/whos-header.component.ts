import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { WhoUiService } from "../../services/who-ui.service";

@Component({
  selector: 'app-whos-header',
  templateUrl: './whos-header.component.html',
  styleUrls: ['./whos-header.component.css']
})
export class WhosHeaderComponent implements OnInit {
  title: string = 'Who am I?';
  faUser = faUser;show_add_who!: boolean;
  subscription!: Subscription;

  constructor(private who_ui_service:WhoUiService) { 
    this.subscription = this.who_ui_service.on_toggle_add_who().subscribe((value) => (this.show_add_who = value))
  }

  ngOnInit(): void {
  }

  toggle_add_whoami() {
    this.who_ui_service.toggle_add_who();
  }

}
