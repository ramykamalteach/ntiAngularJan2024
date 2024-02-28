import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {

  public withBG:boolean = false;
  public textDirection:boolean = false;

  changeBG() {
    this.withBG = !this.withBG;
    this.textDirection = !this.textDirection;
  }
}
