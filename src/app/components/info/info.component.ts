import { Component, OnInit } from '@angular/core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { ContUiService } from "../../services/cont-ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title: string = 'Personal Information';
  faAddressCard = faAddressCard;
  show_add_cont!: boolean;
  subscription!: Subscription;

  constructor(private cont_ui_service:ContUiService) { 
    this.subscription = this.cont_ui_service.on_toggle_add_cont().subscribe((value) => (this.show_add_cont = value))
  }

  ngOnInit(): void {
  }

  toggle_add_contact() {
    this.cont_ui_service.toggle_add_cont();
  }

}
