import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { TodoComponent } from './components/todo/todo.component';
import { TrypipesComponent } from './components/trypipes/trypipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    OneComponent,
    TwoComponent,
    TodoComponent,
    TrypipesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataBinding';
}
