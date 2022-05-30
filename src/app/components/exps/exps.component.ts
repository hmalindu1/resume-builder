import { Component, OnInit } from '@angular/core';
import { Exp } from "../../Exp";
import { EXPS } from "../../mock-exp";

@Component({
  selector: 'app-exps',
  templateUrl: './exps.component.html',
  styleUrls: ['./exps.component.css']
})
export class ExpsComponent implements OnInit {
  exps: Exp[] = EXPS

  constructor() { }

  ngOnInit(): void {
  }

}
