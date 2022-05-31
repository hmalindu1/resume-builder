import { Component, OnInit } from '@angular/core';
import { ExpService } from "../../services/exp.service";
import { Exp } from "../../Exp";

@Component({
  selector: 'app-exps',
  templateUrl: './exps.component.html',
  styleUrls: ['./exps.component.css']
})
export class ExpsComponent implements OnInit {
  exps: Exp[] = [];

  constructor(private exp_service: ExpService) { }

  ngOnInit(): void {
    this.exp_service.get_exps().subscribe((exps) => (this.exps = exps));
  }

  delete_exp(exp: Exp) {
    this.exp_service.delete_exp_s(exp).subscribe(() => (this.exps = this.exps.filter((e) => e.id !== exp.id)));
  }

}
