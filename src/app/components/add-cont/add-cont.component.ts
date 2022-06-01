import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { Cont } from 'src/app/Cont';


@Component({
  selector: 'app-add-cont',
  templateUrl: './add-cont.component.html',
  styleUrls: ['./add-cont.component.css']
})
export class AddContComponent implements OnInit {
  @Output() on_add_cont_a: EventEmitter<Cont> = new EventEmitter();
  name!: string;
  position!: string;
  mo_number!: string;
  email!: string;
  location!: string;
  exp!: string;

  constructor() { }

  ngOnInit(): void {
  }

  on_submit() {
    if (!this.name && !this.position && !this.exp && !this.mo_number && !this.email && !this.location) {
      alert('Please fill up the form');
      return;
    }

    const new_cont = {
      name: this.name,
      position: this.position,
      mo_number: this.mo_number,
      email: this.email,
      location: this.location,
      exp: this.exp,
    }

    this.on_add_cont_a.emit(new_cont);
    
    
    this.name = '';
    this.position = '';
    this.mo_number = '';
    this.email = '';
    this.location = '';
    this.exp = '';
  }

}
