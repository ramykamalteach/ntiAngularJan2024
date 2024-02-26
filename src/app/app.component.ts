import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    OneComponent,
    TwoComponent
  ],
  templateUrl: './app.component.html',
  /* template: `
          <h1>App component tile</h1>
          <p>details : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus necessitatibus veniam ab perspiciatis obcaecati quaerat quos officia magnam nulla, tempore quia eos recusandae, nemo quibusdam, repellendus cum reprehenderit modi eveniet.</p>
  `, */
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first01';
}
