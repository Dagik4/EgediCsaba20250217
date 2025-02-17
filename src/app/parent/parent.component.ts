import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'; // Importáld a ChildComponent-et

@Component({
  selector: 'app-parent',
  standalone: true, // Standalone komponens
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  imports: [ChildComponent] // Importáld a ChildComponent-et
})
export class ParentComponent {
  a: number = 0; // Első szám
  b: number = 0; // Második szám
  result: number = 0; // Eredmény

  // Metódus, amelyet a Child komponens eseménye hív meg
  updateResult(value: number) {
    this.result = value;
  }
}
