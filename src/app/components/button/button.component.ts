import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() btn_click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  on_click() {
    this.btn_click.emit();
  }

}
