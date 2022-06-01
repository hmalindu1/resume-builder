import { Component, OnInit } from '@angular/core';
import { ConstService } from "../../services/const.service";
import { Cont } from "../../Cont";

@Component({
  selector: 'app-conts',
  templateUrl: './conts.component.html',
  styleUrls: ['./conts.component.css']
})
export class ContsComponent implements OnInit {
  conts: Cont[] = []

  constructor(private cont_service: ConstService) { }

  ngOnInit(): void {
    this.cont_service.get_conts().subscribe((conts) => (this.conts = conts));
  }

  delete_cont(cont: Cont) {
    this.cont_service.delete_cont_s(cont).subscribe(() => (this.conts = this.conts.filter((c) => c.id !== cont.id)));
  }

  add_cont(cont: Cont) {
    this.cont_service.add_cont_s(cont).subscribe((cont) => (this.conts.push(cont)))
  }

}
