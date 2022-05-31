import { Component, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { ExpUiService } from "../../services/exp-ui.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Experience';
  faBuilding = faBuilding;
  show_add_exp!: boolean;
  subscription!: Subscription;

  constructor(private exp_ui_service:ExpUiService) { 
    this.subscription = this.exp_ui_service.on_toggle_add_exp().subscribe((value) => (this.show_add_exp = value))
  }

  ngOnInit(): void {
  }

  toggle_add_experience() {
    this.exp_ui_service.toggle_add_exp();
  }

}
