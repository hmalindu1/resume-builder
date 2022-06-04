import { Component, OnInit } from '@angular/core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { EducUiService } from "../../services/educ-ui.service";


@Component({
  selector: 'app-educs-header',
  templateUrl: './educs-header.component.html',
  styleUrls: ['./educs-header.component.css']
})
export class EducsHeaderComponent implements OnInit {
  title: string = 'Education ';
  faUserGraduate = faUserGraduate;
  show_add_educ!: boolean;
  subscription!: Subscription;

  constructor(private educ_ui_service:EducUiService) { 
    this.subscription = this.educ_ui_service.on_toggle_add_educ().subscribe((value) => (this.show_add_educ = value))
  }

  ngOnInit(): void {
  }

  toggle_add_education() {
    this.educ_ui_service.toggle_add_educ();
  }

}
