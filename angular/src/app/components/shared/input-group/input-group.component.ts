import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

  constructor() { }

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() options: string[] = [];

  ngOnInit(): void {
  }

}
