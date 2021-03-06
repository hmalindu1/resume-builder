import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExpUiService } from "../../services/exp-ui.service";
import { Subscription } from "rxjs";
import { Exp } from 'src/app/Exp';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {
  @Output() on_add_exp_a: EventEmitter<Exp> = new EventEmitter();
  company!: string;
  position!: string;
  period!: string;
  duration!: string;
  project_one!: string;
  project_two!: string;
  project_three!: string;
  show_add_exp!: boolean;
  subscription!: Subscription;

  constructor( private exp_ui_service:ExpUiService) { 
    this.subscription = this.exp_ui_service.on_toggle_add_exp().subscribe((value) => (this.show_add_exp = value))
  }

  ngOnInit(): void {
  }

  on_submit() {
    if (!this.company && !this.position && !this.period && !this.duration && !this.project_one && !this.project_two && !this.project_three) {
      alert('Please add all the information');
      return;
    }

    const new_exp = {
      company: this.company,
      position: this.position,
      period: this.period,
      duration: this.duration,
      project_one: this.project_one,
      project_two: this.project_two,
      project_three: this.project_three,
    }

    this.on_add_exp_a.emit(new_exp)

    this.company = '';
    this.position = '';
    this.period = '';
    this.duration = '';
    this.project_one = '';
    this.project_two = '';
    this.project_three = '';
  }

}
