import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CapFirstPipe } from '../../pipes/cap-first.pipe';

@Component({
  selector: 'app-trypipes',
  standalone: true,
  imports: [
    CommonModule,
    CapFirstPipe
  ],
  templateUrl: './trypipes.component.html',
  styleUrl: './trypipes.component.css'
})
export class TrypipesComponent {
  public today = Date.now();
}
