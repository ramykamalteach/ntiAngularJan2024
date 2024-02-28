import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  public msg:string = 'this is interpolation';

  public photo:string = '../../../assets/img/our-menu-17.jpg';

  public productName:string = 'Pizza';
  handleButtonClick () {
    this.productName = "Fish";
  }

  public inputText:string = '';
  handleInputChange () {
    this.inputText = this.inputText.toUpperCase();
  }
}
