import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { Who } from "../../Who";
import { WhoUiService } from "../../services/who-ui.service";

@Component({
  selector: 'app-add-who',
  templateUrl: './add-who.component.html',
  styleUrls: ['./add-who.component.css']
})
export class AddWhoComponent implements OnInit {
  @Output() on_add_who_a: EventEmitter<Who> = new EventEmitter();
  des!: string;
  show_add_who!: boolean;
  subscription!: Subscription;

  constructor(private who_ui_service:WhoUiService) { 
    this.subscription = this.who_ui_service.on_toggle_add_who().subscribe((value) => (this.show_add_who = value))
  }

  ngOnInit(): void {
  }

  on_submit() {
    if (!this.des) {
      alert('Please add all the information');
      return;
    }

    const new_who = {
      des: this.des,
      }

    this.on_add_who_a.emit(new_who)

    this.des = '';
  }

}
