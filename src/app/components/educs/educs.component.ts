import { Component, OnInit } from '@angular/core';
import { EducService } from "../../services/educ.service";
import { Educ } from "../../Educ";

@Component({
  selector: 'app-educs',
  templateUrl: './educs.component.html',
  styleUrls: ['./educs.component.css']
})
export class EducsComponent implements OnInit {
  educs: Educ[] = [];

  constructor(private educ_service: EducService) { }

  ngOnInit(): void {
    this.educ_service.get_educs().subscribe((educs) =>(this.educs = educs))
  }

  delete_educ(educ: Educ) {
    this.educ_service.delete_educ_s(educ).subscribe(() => (this.educs = this.educs.filter((e) => e.id !== educ.id)));
  }

  add_educ(educ: Educ) {
    this.educ_service.add_educ_s(educ).subscribe((educ) => (this.educs.push(educ)))
  }

}
