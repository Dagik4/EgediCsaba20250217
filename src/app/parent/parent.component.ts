import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'; 

@Component({
  selector: 'app-parent',
  standalone: true, // Standalone komponens
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  imports: [ChildComponent] 
})
export class ParentComponent {
  a: number = 0; 
  b: number = 0; 
  result: number = 0; 

  updateResult(value: number) {
    this.result = value;
  }
}
