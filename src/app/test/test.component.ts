import { Component } from '@angular/core';

/*@ts-ignore */
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  number: number = 0;

  //counter
  increment() {
    this.number++;
  }
}
