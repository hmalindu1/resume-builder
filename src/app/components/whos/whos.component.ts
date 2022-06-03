import { Component, OnInit } from '@angular/core';
import { WhoService } from "../../services/who.service";
import { Who } from "../../Who";

@Component({
  selector: 'app-whos',
  templateUrl: './whos.component.html',
  styleUrls: ['./whos.component.css']
})
export class WhosComponent implements OnInit {
  whos: Who[] = [];

  constructor(private who_service: WhoService) { }

  ngOnInit(): void {
    this.who_service.get_whos().subscribe((whos) =>(this.whos = whos))
  }

  delete_who(who: Who) {
    this.who_service.delete_who_s(who).subscribe(() => (this.whos = this.whos.filter((e) => e.id !== who.id)));
  }

  add_who(who: Who) {
    this.who_service.add_who_s(who).subscribe((who) => (this.whos.push(who)))
  }

}
