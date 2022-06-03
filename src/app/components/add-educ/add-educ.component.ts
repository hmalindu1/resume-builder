import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { Educ } from "../../Educ";
import { EducUiService } from "../../services/educ-ui.service";

@Component({
  selector: 'app-add-educ',
  templateUrl: './add-educ.component.html',
  styleUrls: ['./add-educ.component.css']
})
export class AddEducComponent implements OnInit {
  @Output() on_add_educ_a: EventEmitter<Educ> = new EventEmitter();
  university!: string;
  period!: string;
  program!: string;
  class!: string;
  gpa!: string;
  show_add_educ!: boolean;
  subscription!: Subscription;

  constructor(private educ_ui_service:EducUiService) { 
    this.subscription = this.educ_ui_service.on_toggle_add_educ().subscribe((value) => (this.show_add_educ = value))
  }

  ngOnInit(): void {
  }

  on_submit() {
    if (!this.university && !this.period && !this.program && !this.class && !this.gpa) {
      alert('Please add all the information');
      return;
    }

    const new_educ = {
      university: this.university,
      period: this.period,
      program: this.program,
      class: this.class,
      gpa: this.gpa,
      }

    this.on_add_educ_a.emit(new_educ)

    this.university = '';
    this.period = '';
    this.program = '';
    this.class = '';
    this.gpa = '';
  }

}
