import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() a: number = 0; 
  @Input() b: number = 0; 
  @Output() result: EventEmitter<number> = new EventEmitter<number>(); 

  add() {
    const sum = this.a + this.b;
    this.result.emit(sum); 
  }

  subtract() {
    const difference = this.a - this.b;
    this.result.emit(difference); 
  }
}